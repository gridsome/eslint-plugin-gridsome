"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
var rule = require("../../../lib/rules/require-g-link-to");
var RuleTester = require("eslint").RuleTester;

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------
var tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2015
  }
});

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
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
      errors: ["Expected '<g-link>' elements to have 'v-bind:to' or 'to'."]
    }
  ]
});
