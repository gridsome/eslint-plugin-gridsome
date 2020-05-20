/**
 * @see https://github.com/mysticatea/vue-eslint-parser/blob/master/src/parser-services.ts
 */

import { AST } from "vue-eslint-parser";
import { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

type VueEslintParserNodeTypes = AST.Node["type"];

type TemplateBodyVisitor = {
  [key in VueEslintParserNodeTypes]?: TSESLint.RuleFunction<
    AST.Node & TSESTree.BaseNode
  >;
} & { [nodeSelector: string]: TSESLint.RuleFunction | undefined };

type ScriptVisitor = { [key: string]: (...args: any) => void };

export const defineTemplateBodyVisitor = (
  context: any,
  templateBodyVisitor?: TemplateBodyVisitor,
  scriptVisitor?: ScriptVisitor
) =>
  context.parserServices.defineTemplateBodyVisitor(
    templateBodyVisitor,
    scriptVisitor
  );
