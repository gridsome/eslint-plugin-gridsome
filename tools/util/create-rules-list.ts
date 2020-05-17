import { camelCase } from "change-case";

import { RuleMetaData } from "./types";
import { formatTypescript } from "./format-typescript";

const importSection = (ruleNames: RuleMetaData["name"][]) =>
  ruleNames
    .map((ruleName) => {
      const nameCamel = camelCase(ruleName);

      return `import ${nameCamel} from './rules/${ruleName}';`;
    })
    .join("");

const exportSection = (ruleNames: RuleMetaData["name"][]) => {
  const header = "export const rules = {";
  const footer = "};";
  const rules = ruleNames
    .map((ruleName) => {
      const nameCamel = camelCase(ruleName);

      return `"${ruleName}": ${nameCamel},`;
    })
    .join("");
  return `
  ${header}
  ${rules}
  ${footer}
  `;
};
export const createRulesList = (rulesMetaData: RuleMetaData[]) => {
  const ruleNames = rulesMetaData.map((ruleMetaData) => ruleMetaData.name);

  const content = `
  // This file has been automatically generated, in order to update it's content execute "npm run update"
  ${importSection(ruleNames)}
  ${exportSection(ruleNames)}
  `;

  return { list: formatTypescript(content) };
};
