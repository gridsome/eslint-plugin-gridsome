/**
 * @author tyankatsu
 * @copyright 2019 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

import { AST } from "vue-eslint-parser";
import {
  createRule,
  defineTemplateBodyVisitor,
  hasAttribute,
  hasDirective,
} from "../utils";

type Options = {};

const defaultOptions: [Options] = [{}];

type MessageIds = "requireGImageSrc";
export = createRule<[Options], MessageIds>({
  name: "require-g-image-src",
  meta: {
    docs: {
      description: "Require v-bind:src or src of `<g-image>` elements",
      category: "Possible Errors",
      recommended: false,
    },
    type: "problem",
    messages: {
      requireGImageSrc:
        "Expected '<g-image>' elements to have 'v-bind:src' or 'src'.",
    },
    schema: [],
  },
  defaultOptions,
  create(context) {
    return defineTemplateBodyVisitor(context, {
      "VElement[name='g-image']"(node: AST.VElement) {
        if (!hasAttribute(node, "src") && !hasDirective(node, "bind", "src")) {
          context.report({
            node,
            loc: node.loc,
            messageId: "requireGImageSrc",
          });
        }
      },
    });
  },
});
