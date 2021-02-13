/**
 * @author tyankatsu
 * @copyright 2020 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
import { AST } from "vue-eslint-parser";
import minimatch from "minimatch";
import { createRule, Env, getPathFromProjectRoot } from "../utils";
import * as Fs from "fs";

const PREFIX = "GRIDSOME_";

type Options = {
  pathsForBrowserfile?: string[];
  envPath?: string;
};

const defaultOptions: [Options] = [{}];

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
      useEnvPrefix: "Use `process.env.{{ addedPrefixEnv }}`.",
    },
    schema: [
      {
        type: "object",
        properties: {
          pathsForBrowserfile: {
            type: "array",
            items: {
              type: "string",
            },
          },
          envPath: {
            type: "string",
          },
        },
      },
    ],
  },
  defaultOptions,
  create(context) {
    const path = getPathFromProjectRoot(context.getFilename(), process.cwd());

    const options = {
      pathsForBrowserfile: context.options[0]?.pathsForBrowserfile || [
        "src/**/*",
      ],
      envPath: context.options[0]?.envPath || ".env",
    };

    const isClientfile = options.pathsForBrowserfile.some((clientPath) =>
      minimatch(path, clientPath)
    );

    if (!Fs.existsSync(options.envPath)) return {};
    const envSource = Fs.readFileSync(options.envPath, { encoding: "utf8" });

    const parsedEnvSource = new Env(envSource).parse();

    return {
      "MemberExpression[object.object.name='process'][object.property.name='env']"(
        node: AST.ESLintMemberExpression
      ) {
        if (!isClientfile) return;
        if (node.property.type !== "Identifier") return;
        if (node.property.name.includes(PREFIX)) return;

        const envName = node.property.name;

        if (parsedEnvSource.has(envName)) {
          context.report({
            node,
            loc: node.loc,
            messageId: "useEnvPrefix",
            data: {
              addedPrefixEnv: `${PREFIX}${envName}`,
            },
          });
        }
      },
    };
  },
});
