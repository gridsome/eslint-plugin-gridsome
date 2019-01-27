---
to: log/rules/log.js
---
"use strict";

/**
 * Remove `parent` proeprties from the given AST.
 * @param {string} key The key.
 * @param {any} value The value of the key.
 * @returns {any} The value of the key to output.
 */
function replacer(key, value) {
  if (key === "parent") {
    return undefined;
  }
  if (key === "errors" && Array.isArray(value)) {
    return value.map(e => ({
      message: e.message,
      index: e.index,
      lineNumber: e.lineNumber,
      column: e.column
    }));
  }
  return value;
}

module.exports = {
  create(context) {
    return {
      Program(node) {
        console.log(JSON.stringify(node, replacer, 2));
      }
    };
  }
};
