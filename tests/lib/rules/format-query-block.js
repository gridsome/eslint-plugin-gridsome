"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

var rule = require("../../../lib/rules/format-query-block");
var RuleTester = require("eslint").RuleTester;

var tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2015
  }
});
tester.run("format-query-block", rule, {
  valid: [
    {
      code: `
<page-query>
query Blog {
  allWordPressPost(limit: 5) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>
    `
    },
    {
      code: `
<static-query>
query Example {
  example: examplePage(path: "/docs/example") {
    content
  }
}
</static-query>
    `
    }
  ],
  invalid: [
    {
      code: `
<template></template>
<page-query>
query Blog {
              allWordPressPost(limit: 5){
          edges{
      node {
        id
        title
    }
    }
  }
}
</page-query>
    `,
      output: `
<template></template>
<page-query>
query Blog {
  allWordPressPost(limit: 5) {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>
    `,
      errors: ["page-query code format is incorrect"]
    },
    {
      code: `
<template></template>
<static-query>
      query Example {
            example: examplePage (path: "/docs/example") {
      content
              }
  }
</static-query>
    `,
      output: `
<template></template>
<static-query>
query Example {
  example: examplePage(path: "/docs/example") {
    content
  }
}
</static-query>
    `,
      errors: ["static-query code format is incorrect"]
    }
  ]
});
