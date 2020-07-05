/**
 * @author tyankatsu
 * @copyright 2018 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

import { AST } from "vue-eslint-parser";
import {
  createRule,
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
  getCodeWrapIndentInfo,
  NodeNames,
  OverridePrettierOption,
} from "../utils";

import prettier from "prettier";

const prettierParser = "graphql";
const LINES = /[^\r\n\u2028\u2029]+(?:$|\r\n|[\r\n\u2028\u2029])|\s/gu;

type Options = {
  overridePrettierOption?: OverridePrettierOption;
};

const defaultOptions: [Options] = [{}];

type MessageIds = "formatQueryBlock";
export = createRule<[Options], MessageIds>({
  name: "format-query-block",
  meta: {
    docs: {
      description:
        "Format fix for `<page-query>` and `<static-query>` in .vue. Using Prettier API",
      category: "Stylistic Issues",
      recommended: false,
    },
    type: "layout",
    fixable: "whitespace",
    messages: {
      formatQueryBlock: "{{ name }} code format is incorrect",
    },
    schema: [
      {
        type: "object",
        properties: {
          overridePrettierOption: {
            type: "object",
            items: [
              { tabWidth: "number" },
              { useTabs: "boolean" },
              { vueIndentScriptAndStyle: "boolean" },
            ],
          },
        },
      },
    ],
  },
  defaultOptions,
  create(context) {
    const overridePrettierOption = context.options[0]?.overridePrettierOption;

    const sourceCode = context.getSourceCode();
    const filePath = context.getFilename();

    const mergedPrettierOption = getMergedPrettierOption(
      getPrettierDefaultOption,
      getPrettierRcOption(filePath)
    );

    const { indentRepeatTime, indentChar } = getCodeWrapIndentInfo(
      mergedPrettierOption,
      overridePrettierOption
    );
    const indent = indentChar.repeat(indentRepeatTime);

    return {
      Program(node: AST.ESLintProgram) {
        if (!node.templateBody) {
          return;
        }

        const topLevelNodes = node.templateBody.parent.children;

        for (const topLevelNode of topLevelNodes) {
          if (
            topLevelNode.type === "VElement" &&
            (topLevelNode.name === NodeNames["page-query"] ||
              topLevelNode.name === NodeNames["static-query"])
          ) {
            const codeRange: AST.OffsetRange = [
              topLevelNode.startTag.range[1],
              topLevelNode.endTag
                ? topLevelNode.endTag.range[0]
                : topLevelNode.range[1],
            ];

            const code = sourceCode.text.slice(...codeRange);

            const prettierConfig = {
              ...getPrettierRcOption(filePath),
              ...overridePrettierOption,
            };

            const formattedCode = prettier
              .format(code, { ...prettierConfig, parser: prettierParser })
              .trim();

            let lines = formattedCode.match(LINES);

            if (lines === null) {
              return;
            }
            lines = ["\n", ...lines, "\n"];

            const wrappedIndentCode = lines
              .map((line) => {
                if (line === "\n") {
                  return line;
                }
                return indent + line;
              })
              .join("");

            if (wrappedIndentCode !== code) {
              context.report({
                messageId: "formatQueryBlock",
                data: {
                  name: topLevelNode.name,
                },
                node: topLevelNode,
                loc: topLevelNode.loc,

                fix(fixer) {
                  return fixer.replaceTextRange(codeRange, wrappedIndentCode);
                },
              });
            }
          }
        }
      },
    };
  },
});
