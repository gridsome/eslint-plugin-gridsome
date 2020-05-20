import { AST } from "vue-eslint-parser";
import {
  createRule,
  defineTemplateBodyVisitor,
  hasAttribute,
  hasDirective,
} from "../utils";

type Options = {};

const defaultOptions: [Options] = [{}];

type MessageIds = "requireGLinkTo";

const statementTo = (node: AST.VElement) =>
  !hasAttribute(node, "to") && !hasDirective(node, "bind", "to");
const statementHref = (node: AST.VElement) =>
  !hasAttribute(node, "href") && !hasDirective(node, "bind", "href");

export = createRule<[Options], MessageIds>({
  name: "require-g-link-to",
  meta: {
    docs: {
      description: "Require v-bind:src or src of `<g-image>` elements",
      category: "Possible Errors",
      recommended: false,
    },
    type: "problem",
    messages: {
      requireGLinkTo:
        "Expected '<g-link>' elements to have 'v-bind:to', 'to' or 'v-bind:href', 'href'.",
    },
    schema: [],
  },
  defaultOptions,
  create(context) {
    return defineTemplateBodyVisitor(context, {
      "VElement[name='g-link']"(node: AST.VElement) {
        if (statementTo(node) && statementHref(node)) {
          context.report({
            node,
            loc: node.loc,
            messageId: "requireGLinkTo",
          });
        }
      },
    });
  },
});
