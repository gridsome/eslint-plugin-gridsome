/**
 * Get indent options
 * @param {object} mergedPrettierOptions
 * @return {object}
 */
const getIndentOptions = (mergedPrettierOptions) => {
  const defaultOptions = {
    baseIndent: 0,
    indentChar: " ",
  };

  const { tabWidth, useTabs } = mergedPrettierOptions;

  const result = {
    baseIndent: tabWidth,
  };

  if (useTabs) {
    result.baseIndent = 1;
    result.indentChar = "\t";
  }

  return { ...defaultOptions, ...result };
};

module.exports = getIndentOptions;
