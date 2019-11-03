const prettier = require("prettier");

/**
 * Get Prettier's default options that Prettier settings
 * @return {Object} { optionsName: optionsDefaultValue }
 */
const getPrettierDefaultOptions = prettier
  .getSupportInfo(prettier.version)
  .options.reduce((result, current) => {
    result[current.name] = current.default;
    return result;
  }, {});

/**
 * Get Prettier's options that user settings
 * @param {string} filePath File path that formatted with Prettier
 * @return {Object} { optionsName: optionsDefaultValue }
 */
const getPrettierRcOptions = filePath => {
  return prettier.resolveConfig.sync(filePath, {
    editorconfig: true
  });
};

/**
 * Get merged options that Prettier's default options and user settings options
 * @param {object} prettierDefaultOptions
 * @param {object} prettierRcOptions
 * @return {object} Merged options
 */
const getMergedPrettierOptions = (
  prettierDefaultOptions,
  prettierRcOptions
) => {
  return { ...prettierDefaultOptions, ...prettierRcOptions };
};

module.exports = {
  getPrettierDefaultOptions,
  getPrettierRcOptions,
  getMergedPrettierOptions
};
