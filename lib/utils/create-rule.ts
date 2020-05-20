import { RuleCreator } from "./rule-creator";

// eslint-disable-next-line new-cap
export const createRule = RuleCreator(
  (name) =>
    `https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/${name}.md`
);
