import { RuleTester } from "../../util";

import rule from "../../../lib/rules/use-env-prefix";

const tester = new RuleTester({
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
});

tester.run("use-env-prefix", rule, {
  valid: [
    {
      filename: "Index.vue",
      code: `
      <template></template>
      <script>
        export default {
          data () {
            return {
              url: process.env.GRIDSOME_API_URL
            }
          }
        }
      </script>
      `,
    },
  ],
  invalid: [
    {
      filename: "Index.vue",
      code: `
      <template></template>
      <script>
        export default {
          data () {
            return {
              url: process.env.API_URL
            }
          }
        }
      </script>
      `,
      errors: [
        {
          messageId: "useEnvPrefix",
        },
      ],
    },
  ],
});
