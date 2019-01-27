"use strict";

const path = require("path");
const fo = require("../util/fileOperations");
const getRuleMeta = require("../util/getRuleMeta");

const ROOT = path.resolve(__dirname, "../../");

fo.write(
  `${ROOT}/README.md`,
  fo.read(`${ROOT}/tools/update-readme/_readme/readme-header.md`)
);

const appendRuleTable = () => {
  const header = `
  | Rule Name	 | Description |
  | ---- | ---- |
  `;
  const body = () => {
    const array = [];
    getRuleMeta.forEach(meta => {
      array.push(
        `| [${meta.name}](${meta.docs.url}) | ${meta.docs.description} |`
      );
    });
    return array.join("\n");
  };
  const content = `${header}${body()}`;
  return content;
};

fo.write(
  `${ROOT}/tools/update-readme/_readme/readme-body.md`,
  appendRuleTable()
);

fo.append(
  `${ROOT}/README.md`,
  fo.read(`${ROOT}/tools/update-readme/_readme/readme-body.md`)
);
