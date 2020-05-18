import { AST } from "vue-eslint-parser";
import { createRule, defineTemplateBodyVisitor } from "../utils";

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
    type: "suggestion",
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
        console.log(node.name);
      },
    });
  },
});
