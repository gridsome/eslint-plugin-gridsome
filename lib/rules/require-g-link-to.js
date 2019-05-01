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
      description: "Require v-bind:to or to of <g-link> elements",
      url:
        "https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-link-to.md"
    }
  },
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='g-link']"(node) {
        if (
          !utils.hasAttribute(node, "to") &&
          !utils.hasDirective(node, "bind", "to")
        ) {
          context.report({
            node: node,
            loc: node.loc,
            message: "Expected '<g-link>' elements to have 'v-bind:to' or 'to'."
          });
        }
      }
    });
  }
};
