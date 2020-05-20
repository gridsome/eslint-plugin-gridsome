import { RuleTester } from "../../util";

import rule from "../../../lib/rules/require-g-image-src";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});

tester.run("require-g-image-src", rule, {
  valid: [
    {
      code: `
      <template>
        <g-image
          src="http://www.example.com/foo.jpg"
          class="foo"
          width="300"
        />
      </template>`
    },
  ],
  invalid: [
    {
      code: `
      <template>
        <g-image
          class="foo"
          width="300"
        />
      </template>`,
      errors: [
        {
          messageId: 'requireGImageSrc'
        }
      ]
    }
  ]
});
