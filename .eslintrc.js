module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:node/recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "node/no-unpublished-require": ["warn"]
  }
};
