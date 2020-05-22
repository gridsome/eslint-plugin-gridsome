import { AST } from "vue-eslint-parser";
import { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

export type VueEslintParserNodeTypes = AST.Node["type"];

export type TemplateBodyVisitor = {
  [key in VueEslintParserNodeTypes]?: TSESLint.RuleFunction<
    AST.Node & TSESTree.BaseNode
  >;
} & { [nodeSelector: string]: TSESLint.RuleFunction | undefined };

export type ScriptVisitor = { [key: string]: (...args: any) => void };
