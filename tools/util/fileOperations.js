const fs = require("fs");

/**
 * @param {string} filePath
 * @returns {string} file's content
 */
const read = filePath => {
  const content = fs.readFileSync(filePath, "utf8");
  return content;
};

/**
 * @param {string} targetFilePath
 * @param {string} writeContent
 */
const write = (targetFilePath, writeContent) => {
  fs.writeFileSync(targetFilePath, writeContent);
};

/**
 * @param {string} readFilePath
 * @param {string} appendContent
 */
const append = (readFilePath, appendContent) => {
  const readFile = fs.openSync(readFilePath, "a");
  fs.appendFileSync(readFile, appendContent, "utf8");
};

module.exports = {
  read,
  write,
  append
};
