import { AST } from "vue-eslint-parser";
import {
  createRule,
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
  getIndentInfo,
  NodeNames,
} from "../utils";

import prettier from "prettier";

const prettierParser = "graphql";
const LINES = /[^\r\n\u2028\u2029]+(?:$|\r\n|[\r\n\u2028\u2029])|\s/gu;

type Options = {};

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
    schema: [],
  },
  defaultOptions,
  create(context) {
    const sourceCode = context.getSourceCode();
    const filePath = context.getFilename();

    const mergedPrettierOption = getMergedPrettierOption(
      getPrettierDefaultOption,
      getPrettierRcOption(filePath)
    );

    const { baseIndent, indentChar } = getIndentInfo(mergedPrettierOption);
    const indent = indentChar.repeat(baseIndent);

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

            const prettierConfig = getPrettierRcOption(filePath);

            const formattedCode = prettier
              .format(
                code,
                Object.assign({}, prettierConfig, {
                  parser: prettierParser,
                })
              )
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
