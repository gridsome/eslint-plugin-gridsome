import { ESLintUtils } from "@typescript-eslint/experimental-utils";

export type Rule = ReturnType<ReturnType<typeof ESLintUtils.RuleCreator>>;

export type RuleMetaData = { name: string; meta: Rule["meta"] };
