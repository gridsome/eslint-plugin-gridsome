/**
 * @author tyankatsu
 * @copyright 2020 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
import { AST } from "vue-eslint-parser";
import { createRule } from "../utils";

type Options = {};

const defaultOptions: [Options] = [{}];

const PREFIX = "GRIDSOME_";

type MessageIds = "useEnvPrefix";
export = createRule<[Options], MessageIds>({
  name: "use-env-prefix",
  meta: {
    docs: {
      description: "Use prefix `GRIDSOME_` when using process.env in browser",
      category: "Possible Errors",
      recommended: false,
    },
    type: "problem",
    messages: {
      useEnvPrefix:
        "`{{ processEnv }}` has possible error. If you have some errors around process.env, consider using `{{ AddedPrefixProcessEnv }}`.",
    },
    // TODO: User are able to set `.env` file path
    schema: [],
  },
  defaultOptions,
  create(context) {
    // TODO: only check `.vue`

    return {
      "MemberExpression[object.object.name='process'][object.property.name='env']"(
        node: AST.ESLintMemberExpression
      ) {
        if (node.property.type !== "Identifier") return;
        if (node.property.name.includes(PREFIX)) return;

        const processEnv = node.property.name;

        context.report({
          node,
          loc: node.loc,
          messageId: "useEnvPrefix",
          data: {
            processEnv,
            AddedPrefixProcessEnv: `${PREFIX}${processEnv}`,
          },
        });
      },
    };
  },
});
