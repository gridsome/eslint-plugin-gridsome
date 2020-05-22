/**
 * @see https://github.com/mysticatea/vue-eslint-parser/blob/master/src/parser-services.ts
 */

import { TemplateBodyVisitor, ScriptVisitor } from "./types";

export const defineTemplateBodyVisitor = (
  context: any,
  templateBodyVisitor?: TemplateBodyVisitor,
  scriptVisitor?: ScriptVisitor
) =>
  context.parserServices.defineTemplateBodyVisitor(
    templateBodyVisitor,
    scriptVisitor
  );
