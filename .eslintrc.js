/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    project: "tsconfig.json",
    sourceType: "module",
  },

  extends: ["plugin:@mysticatea/es2017", "plugin:@mysticatea/+eslint-plugin"],
  rules: {
    "@mysticatea/prettier": [
      "error",
      {
        tabWidth: 2,
      },
    ],
    "func-style": ["error", "expression"],
  },
};
