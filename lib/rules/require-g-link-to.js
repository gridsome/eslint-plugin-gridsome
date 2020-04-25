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
      description: "Require v-bind:to or to of `<g-link>` elements",
      url:
        "https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-link-to.md",
    },
  },
  create(context) {
    const statementTo = (node) => {
      return (
        !utils.hasAttribute(node, "to") &&
        !utils.hasDirective(node, "bind", "to")
      );
    };
    const statementHref = (node) => {
      return (
        !utils.hasAttribute(node, "href") &&
        !utils.hasDirective(node, "bind", "href")
      );
    };

    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='g-link']"(node) {
        if (statementTo(node) && statementHref(node)) {
          context.report({
            node: node,
            loc: node.loc,
            message:
              "Expected '<g-link>' elements to have 'v-bind:to', 'to' or 'v-bind:href', 'href'.",
          });
        }
      },
    });
  },
};
