import { RuleTester } from "../../util";

import rule from "../../../lib/rules/use-env-prefix";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
  },
});

tester.run("use-env-prefix", rule, {
  valid: [``],
  invalid: [
    {
      code: ``,
      errors: [
        {
          messageId: "useEnvPrefix",
        },
      ],
    },
  ],
});
