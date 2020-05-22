import { NAME_SPACE } from "./const";
import { RuleMetaData } from "./types";
import { formatMarkdown } from "./format-markdown";

const createIntro = () => `
---
title: Rules
---

<!-- This file has been automatically generated, in order to update it's content execute "npm run update" -->

# Rules

## 🛠Available rules
`;

const createRulesSection = (rulesMetaData: RuleMetaData[]) => {
  const tableHeader = `
|Rule ID|Description|Fixable|
| :--- | :--- | :---: |`;

  const rulesTable = rulesMetaData
    .map((ruleMetaData) => {
      const { name } = ruleMetaData;
      const url = `/rules/${name}`;
      const description = ruleMetaData.meta.docs?.description;
      const fixable = ruleMetaData.meta.fixable ? ":wrench:" : "";

      return `|[${NAME_SPACE}/${name}](${url})|${description}|${fixable}|\n`;
    })
    .join("");

  return `
  ${tableHeader}
  ${rulesTable}
  `;
};

export const createRuleDocs = (rulesMetaData: RuleMetaData[]) => {
  const doc: string[] = [];
  doc.push(createIntro());

  doc.push(createRulesSection(rulesMetaData));

  return { doc: formatMarkdown(doc.join("")) };
};
