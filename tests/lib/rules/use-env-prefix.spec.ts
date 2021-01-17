import path from "path";
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
      filename: path.join(process.cwd(), "src/components/code.vue"),
      ...loadFixture({
        fixtureDirectory: "valid/01",
      }),
      options: [
        {
          pathsForBrowserfile: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/valid/01/.env",
        },
      ],
    },
    {
      filename: path.join(process.cwd(), "src/client.js"),
      ...loadFixture({
        fixtureDirectory: "valid/02",
        filenames: {
          code: "client.js",
        },
      }),
      options: [
        {
          pathsForBrowserfile: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/valid/02/.env",
        },
      ],
    },
  ],
  invalid: [
    {
      filename: path.join(process.cwd(), "src/components/code.vue"),
      ...loadFixture({
        fixtureDirectory: "invalid/01",
      }),
      options: [
        {
          pathsForBrowserfile: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/invalid/01/.env",
        },
      ],
      errors: [
        {
          messageId: "useEnvPrefix",
        },
      ],
    },
    {
      filename: path.join(process.cwd(), "src/client.js"),
      ...loadFixture({
        fixtureDirectory: "invalid/02",
        filenames: {
          code: "client.js",
        },
      }),
      options: [
        {
          pathsForBrowserfile: ["src/**/*"],
          envPath: "tests/lib/rules/fixtures/use-env-prefix/invalid/02/.env",
        },
      ],
      errors: [
        {
          messageId: "useEnvPrefix",
        },
        {
          messageId: "useEnvPrefix",
        },
      ],
    },
  ],
});
