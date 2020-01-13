const { write, append } = require("./util/fileOperations");
const { rules } = require("../lib");

const getMergedRuleProperties = rules => {
  return Object.values(rules).map((value, index) => {
    return {
      name: Object.keys(rules)[index],
      ...value
    };
  });
};

const ruleProperties = getMergedRuleProperties(rules);

const readmeHeader = `---
title: Rules
---
# Rules

## 🛠Available rules
`;

const tableHeader = `
|Rule name|Description|Fixable|
|:-|:-|:-:|
`;

const tableBody = ruleProperties
  .map(property => {
    return `|[${property.name}](/rules/${property.name})|${
      property.meta.docs.description
    }|${property.meta.fixable ? "👌" : ""}|`;
  })
  .join("\n");

write("docs/rules/README.md", readmeHeader);
append("docs/rules/README.md", tableHeader);
append("docs/rules/README.md", tableBody);
