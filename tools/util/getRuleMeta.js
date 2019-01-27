"use strict";

const fs = require("fs");
const path = require("path");
const RULES = path.resolve(__dirname, "../../lib/rules");

const fn = () => {
  const ruleNames = fs.readdirSync(RULES);
  const rules = [];
  ruleNames.forEach(ruleName => {
    const content = require(`${RULES}/${ruleName}`);
    rules.push({
      name: ruleName.replace(/.js/, ""),
      ...content.meta
    });
  });
  return rules;
};

const getRuleMeta = fn();

module.exports = getRuleMeta;
