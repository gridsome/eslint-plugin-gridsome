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
    type: "problem",
    docs: {
      description: "Require v-bind:src or src of `<g-image>` elements",
      url:
        "https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-image-src.md"
    }
  },

  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='g-image']"(node) {
        if (
          !utils.hasAttribute(node, "src") &&
          !utils.hasDirective(node, "bind", "src")
        ) {
          context.report({
            node: node,
            loc: node.loc,
            message:
              "Expected '<g-image>' elements to have 'v-bind:src' or 'src'."
          });
        }
      }
    });
  }
};
