import { ESLintUtils } from "@typescript-eslint/experimental-utils";

// eslint-disable-next-line new-cap
export const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/${name}.md`
);
