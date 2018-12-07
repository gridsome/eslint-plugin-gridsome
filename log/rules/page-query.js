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
    fixable: "code"
  },
  create(context) {
    const sourceCode = context.getSourceCode();
    return {
      // Program ノード (AST のルート) で呼ばれる
      Program(node) {
        if (!node.templateBody) {
          return;
        }
        // <template>の兄弟タグから <page-query> を探す
        const topLevelNodes = node.templateBody.parent.children;
        for (const node of topLevelNodes) {
          if (node.type === "VElement" && node.name === "page-query") {
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

            console.log(formattedCode);

            // 整形した結果が現在と異なっていれば報告する
            // if (formattedCode !== code) {
            //   context.report({
            //     loc: node.loc,
            //     message: `format is incorrect`,

            //     fix(fixer) {
            //       return fixer.replaceTextRange(codeRange, `\n${formattedCode}\n`)
            //     }
            //   })
            // }
          }
        }
      }
    };
  }
};
