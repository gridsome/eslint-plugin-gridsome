import { RuleTester } from "../../util";

import rule from "../../../lib/rules/require-g-link-to";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});

tester.run("require-g-link-to", rule, {
  valid: [
    {
      code: `
      <template>
        <g-link
          to="/"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :to="article.path"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :to="{ name: 'about' }"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          href="http://www.example.com"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          href="https://www.example.com"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    },
    {
      code: `
      <template>
        <g-link
          :href="absolute.url"
          class="foo"
        >
        link is here
        </g-link>
      </template>`
    }
  ],
  invalid: [
    {
      code: `
      <template>
        <g-link
          class="foo"
        >
        link is here
        </g-link>
      </template>`,
      errors: [
        {
          messageId: "requireGLinkTo"
        }
      ]
    }
  ]
});
