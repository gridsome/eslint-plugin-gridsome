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
  parser: require.resolve("vue-eslint-parser"),
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
    },
    {
      code: `
      <template>
        <g-image
          :src="path.to.img"
          class="foo"
          width="300"
        />
      </template>`
    },
    {
      code: `
      <template>
        <g-image
          v-bind:src="path.to.img"
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
      errors: ["Expected '<g-image>' elements to have 'v-bind:src' or 'src'."]
    }
  ]
});
