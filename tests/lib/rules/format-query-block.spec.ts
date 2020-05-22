import path from "path";
import fs from "fs";

import { RuleTester } from "../../util";

import rule from "../../../lib/rules/format-query-block";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});


const loadFixture = (filePath: string, isOutputFile: boolean = false) => {
  if(isOutputFile) {
    return {
      code: fs.readFileSync(
        path.join(
          `tests/lib/rules/fixtures/format-query-block/${filePath}/code.vue`
        ),
        { encoding: "utf8" }
      ),
      output: fs.readFileSync(
        path.join(
          `tests/lib/rules/fixtures/format-query-block/${filePath}/output.vue`
        ),
        { encoding: "utf8" }
      )
    }
  }

  return {
    code: fs.readFileSync(
      path.join(
        `tests/lib/rules/fixtures/format-query-block/${filePath}/code.vue`
      ),
      { encoding: "utf8" }
    ),
  }
};

tester.run("format-query-block", rule, {
  valid: [loadFixture("valid/01"), loadFixture("valid/02"), loadFixture("valid/03")],

  // @todo add test case that exist .prettierrc or not exist, if we know how to test that
  invalid: [
    {
      ...loadFixture("invalid/01", true),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
    {
      ...loadFixture("invalid/02", true),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
    {
      ...loadFixture("invalid/03", true),
      errors: [
        {
          messageId: "formatQueryBlock",
        },
      ],
    },
  ],
});
