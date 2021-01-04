import { RuleTester, loadFixtureCreator } from "../../util";

import rule from "../../../lib/rules/use-env-prefix";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
});

const loadFixture = loadFixtureCreator(
  "tests/lib/rules/fixtures/use-env-prefix"
);

tester.run("use-env-prefix", rule, {
  valid: [
    {
      filename: "src/components/code.vue",
      ...loadFixture({
        fixtureDirectory: "valid/01",
      }),
      options: [
        {
          clientPaths: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/valid/01/.env",
        },
      ],
    },
    {
      filename: "gridsome.config.js",
      ...loadFixture({
        fixtureDirectory: "valid/02",
        filenames: {
          code: "gridsome.config.js",
        },
      }),
      options: [
        {
          clientPaths: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/valid/02/.env",
        },
      ],
    },
  ],
  invalid: [
    {
      filename: "src/components/code.vue",
      ...loadFixture({
        fixtureDirectory: "invalid/01",
      }),
      options: [
        {
          clientPaths: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/invalid/01/.env",
        },
      ],
      errors: [
        {
          messageId: "useEnvPrefix",
        },
      ],
    },
  ],
});
