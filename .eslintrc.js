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
    "node/exports-style": ["error", "module.exports"],
    "node/prefer-global/buffer": ["error", "always"],
    "node/prefer-global/console": ["error", "always"],
    "node/prefer-global/process": ["error", "always"],
    "node/prefer-global/url-search-params": ["error", "always"],
    "node/prefer-global/url": ["error", "always"]
  }
};
