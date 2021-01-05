/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "func-style": ["error", "expression"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-irregular-whitespace": ["error", {
      "skipRegExps": true
    }]
  },
};
