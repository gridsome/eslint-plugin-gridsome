"use strict";

module.exports = {
  parser: "vue-eslint-parser",
  env: {
    es6: true,
    node: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "warn",
    "gridsome/require-g-image-src": "error",
    "gridsome/require-g-link-to": "warn"
  }
};
