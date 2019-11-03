/**
 * @author tyankatsu
 * @copyright 2018 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const prettier = require("prettier");

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------
const prettierParser = "graphql";
const LINES = /[^\r\n\u2028\u2029]+(?:$|\r\n|[\r\n\u2028\u2029])/g;

/**
 * Prettier's default options that Prettier settings
 * @return {Object} { optionsName: optionsDefaultValue }
 */
const prettierDefaultOptions = prettier
  .getSupportInfo(prettier.version)
  .options.reduce((result, current) => {
    result[current.name] = current.default;
    return result;
  }, {});

/**
 * Get Prettier's options that user settings
 * @param {string} filePath File path that formatted with Prettier
 * @return {Object} { optionsName: optionsDefaultValue }
 */
const getPrettierOptions = filePath => {
  return prettier.resolveConfig.sync(filePath, {
    editorconfig: true
  });
};

/**
 * Get merged options that Prettier's default options and user settings options
 * @param {object} prettierDefaultOptions
 * @param {object} prettierOptions
 * @return {object} Merged options
 */
const getMergedPrettierOptions = (prettierDefaultOptions, prettierOptions) => {
  return { ...prettierDefaultOptions, ...prettierOptions };
};

/**
 * Get indent options
 * @param {object} mergedPrettierOptions
 * @return {object}
 */
const getIndentOptions = mergedPrettierOptions => {
  const defaultOptions = {
    baseIndent: 0,
    indentChar: " "
  };

  const { tabWidth, useTabs } = mergedPrettierOptions;

  const result = {
    baseIndent: tabWidth
  };

  if (useTabs) {
    result.baseIndent = 1;
    result.indentChar = "\t";
  }

  return { ...defaultOptions, ...result };
};

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description:
        "Format fix for `<page-query>` and `<static-query>` in .vue. Using Prettier API",
      url:
        "https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/format-query-block.md"
    },
    schema: []
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    const filePath = context.getFilename();

    const mergedPrettierOptions = getMergedPrettierOptions(
      prettierDefaultOptions,
      getPrettierOptions(filePath)
    );

    const { baseIndent, indentChar } = getIndentOptions(mergedPrettierOptions);
    const indent = indentChar.repeat(baseIndent);

    return {
      Program(node) {
        if (!node.templateBody) {
          return;
        }
        const topLevelNodes = node.templateBody.parent.children;
        for (const node of topLevelNodes) {
          if (
            (node.type === "VElement" && node.name === "page-query") ||
            node.name === "static-query"
          ) {
            const codeRange = [
              node.startTag.range[1],
              node.endTag ? node.endTag.range[0] : node.range[1]
            ];

            const code = sourceCode.text.slice(...codeRange);

            const prettierConfig = prettier.resolveConfig.sync(filePath, {
              editorconfig: true
            });

            const prettierCode = prettier
              .format(
                code,
                Object.assign({}, prettierConfig, {
                  parser: prettierParser
                })
              )
              .trim();

            let lines = prettierCode.match(LINES);
            lines = ["\n", ...lines, "\n"];

            const formattedCode = lines.map(line => indent + line).join("");

            if (formattedCode !== code) {
              context.report({
                loc: node.loc,
                message: `${node.name} code format is incorrect`,

                fix(fixer) {
                  return fixer.replaceTextRange(codeRange, formattedCode);
                }
              });
            }
          }
        }
      }
    };
  }
};
