import { RuleTester, loadFixtureCreator } from "../../util";

import rule from "../../../lib/rules/format-query-block";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});

const loadFixture = loadFixtureCreator(
  "tests/lib/rules/fixtures/format-query-block"
);

tester.run("format-query-block", rule, {
  valid: [
    loadFixture({ fixtureDirectory: "valid/01" }),
    loadFixture({ fixtureDirectory: "valid/02" }),
    loadFixture({ fixtureDirectory: "valid/03" }),
  ],

  // @todo add test case that exist .prettierrc or not exist, if we know how to test that
  invalid: [
    {
      ...loadFixture({
        fixtureDirectory: "invalid/01",
        hasOutputFile: true,
      }),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
    {
      ...loadFixture({
        fixtureDirectory: "invalid/02",
        hasOutputFile: true,
      }),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
    {
      ...loadFixture({
        fixtureDirectory: "invalid/03",
        hasOutputFile: true,
      }),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
    {
      ...loadFixture({
        fixtureDirectory: "invalid/04",
        hasOutputFile: true,
      }),
      options: [
        {
          overridePrettierOption: {
            vueIndentScriptAndStyle: true,
            tabWidth: 5,
          },
        },
      ],
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
  ],
});
