/**
 * @author tyankatsu
 * @copyright 2018 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

const prettier = require("prettier");
const prettierParser = "graphql";

module.exports = {
  meta: {
    type: "layout",
    fixable: "code",
    docs: {
      description: "format fix for `<page-query>` in .vue. Using Prettier API"
    }
  },
  create(context) {
    const sourceCode = context.getSourceCode();
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
            const code = sourceCode.text.slice(...codeRange).trim();

            const formattedCode = prettier
              .format(code, {
                parser: prettierParser
              })
              .trim();

            if (formattedCode !== code) {
              context.report({
                loc: node.loc,
                message: `${node.name} code format is incorrect`,

                fix(fixer) {
                  return fixer.replaceTextRange(
                    codeRange,
                    `\n${formattedCode}\n`
                  );
                }
              });
            }
          }
        }
      }
    };
  }
};
