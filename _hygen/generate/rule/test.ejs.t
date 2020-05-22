---
to: tests/lib/rules/<%= name %>.spec.ts
---
import { RuleTester } from "../../util";

import rule from "../../../lib/rules/<%= name %>";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});

tester.run("<%= name %>", rule, {
  valid: [
    ``,
  ],
  invalid: [
    {
      code: ``,
      errors: [
        {
          messageId: "<%= h.changeCase.camel(name) %>",
        },
      ],
    },
  ],
});
