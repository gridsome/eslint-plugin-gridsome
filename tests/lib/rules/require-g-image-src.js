"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
var rule = require("../../../lib/rules/require-g-image-src");
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
    }
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
      errors: ["'<g-image>' requires 'src'"]
    }
  ]
});
