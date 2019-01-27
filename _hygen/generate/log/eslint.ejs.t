---
to: log/.eslintrc.js
---
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    "sourceType": "module",
  },
  rules: {
    log: 2
  }
};
