/**
 * @author tyankatsu
 * @copyright 2020 tyankatsu. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

import { createRule, defineTemplateBodyVisitor } from "../utils";

type Options = {};

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
      useEnvPrefix: "",
    },
    schema: [],
  },
  defaultOptions,
  create(context) {
    return defineTemplateBodyVisitor(context, {});
  },
});
