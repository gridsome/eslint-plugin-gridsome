---
to: lib/rules/<%= name %>.ts
---
/**
 * @author <%= author %>
 * @copyright <%= new Date().getFullYear() %> <%= author %>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
 
import { AST } from "vue-eslint-parser";
import { createRule, defineTemplateBodyVisitor } from "../utils";

type Options = {};

const defaultOptions: [Options] = [{}];

type MessageIds = "<%= h.changeCase.camel(name) %>";
export = createRule<[Options], MessageIds>({
  name: "<%= name %>",
  meta: {
    docs: {
      description: "<%= description %>",
      category: "",
      recommended: false,
    },
    type: "",
    messages: {
      <%= h.changeCase.camel(name) %>:
        "",
    },
    schema: [],
  },
  defaultOptions,
  create(context) {
    return defineTemplateBodyVisitor(context, {
      
    });
  },
});
