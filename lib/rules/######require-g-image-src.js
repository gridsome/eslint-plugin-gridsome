/**
 * @author tyankatsu
 * @copyright 2019 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
const utils = require("../../lib/utils");

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "Require v-bind:src or src of `<g-image>` elements",
      url:
        "https://github.com/gridsome/eslint-plugin-gridsome/blob/v1.4.11/docs/rules/######require-g-image-src.md",
    },
    type: "problem",
  },

  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='g-image']"(node) {
        if (
          !utils.hasAttribute(node, "src") &&
          !utils.hasDirective(node, "bind", "src")
        ) {
          context.report({
            node,
            loc: node.loc,
            message:
              "Expected '<g-image>' elements to have 'v-bind:src' or 'src'.",
          });
        }
      },
    });
  },
};
