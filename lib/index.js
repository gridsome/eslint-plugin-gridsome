"use strict";

module.exports = {
  rules: {
    "format-query-block": require("./rules/format-query-block"),
    "require-g-image-src": require("./rules/require-g-image-src"),
    "require-g-link-to": require("./rules/require-g-link-to"),
  },
  configs: {
    recommended: require("./configs/recommended"),
  },
};
