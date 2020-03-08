"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
var rule = require("../../../lib/rules/format-query-block");
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
<page-query>
  fragment RankingParts on TourRanking {
    id
    rankings: data {
      rank
      nickname
      score
      badge: pin_badge_image_url
      ranking_started_at
      ranking_finished_at
    }
  }

  query($id: ID, $prevId: ID, $nextId: ID) {
    ranking: tourRanking(id: $id) {
      ...RankingParts
    }

    next: tourRanking(id: $prevId) {
      ...RankingParts
    }

    prev: tourRanking(id: $nextId) {
      ...RankingParts
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
