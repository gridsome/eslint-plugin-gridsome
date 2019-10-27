---
to: development/.eslintrc.js
---
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parser: "vue-eslint-parser",
  rules: {
    "format-query-block": 2,
    "require-g-image-src": 2,
    "require-g-link-to": 2
  }
};