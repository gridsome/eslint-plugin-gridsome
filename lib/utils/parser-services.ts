/**
 * @see https://github.com/mysticatea/vue-eslint-parser/blob/master/src/parser-services.ts
 */

import { AST } from "vue-eslint-parser";
import { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

type VueEslintParserNodeTypes<T> = T extends AST.Node ? T["type"] : never;

type TemplateBodyVisitor = {
  [key in VueEslintParserNodeTypes<AST.Node>]?: TSESLint.RuleFunction<
    AST.Node & TSESTree.BaseNode
  >;
};

type ScriptVisitor = { [key: string]: (...args: any) => void };

export const defineTemplateBodyVisitor = (
  context: any,
  templateBodyVisitor?: TemplateBodyVisitor & {
    [nodeSelector: string]: TSESLint.RuleFunction | undefined;
  },
  scriptVisitor?: ScriptVisitor
) =>
  context.parserServices.defineTemplateBodyVisitor(
    templateBodyVisitor,
    scriptVisitor
  );
