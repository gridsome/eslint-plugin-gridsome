/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/experimental-utils/src/eslint-utils/RuleCreator.ts
 */
import { TSESLint, ESLintUtils } from "@typescript-eslint/experimental-utils";
import { RuleContext, RuleListener } from "./types";

// we'll automatically add the url + tslint description for people.
type CreateRuleMetaDocs = Omit<TSESLint.RuleMetaDataDocs, "url">;
export type CreateRuleMeta<TMessageIds extends string> = {
  docs: CreateRuleMetaDocs;
} & Omit<TSESLint.RuleMetaData<TMessageIds>, "docs">;

export const RuleCreator = (urlCreator: (ruleName: string) => string) =>
  function createRule<
    TOptions extends readonly unknown[],
    TMessageIds extends string,
    TRuleListener extends RuleListener = RuleListener
  >({
    name,
    meta,
    defaultOptions,
    create,
  }: {
    name: string;
    meta: CreateRuleMeta<TMessageIds>;
    defaultOptions: TOptions;
    create: (
      context: RuleContext<TMessageIds, TOptions>,
      optionsWithDefault: TOptions
    ) => TRuleListener;
  }) {
    return {
      meta: {
        ...meta,
        docs: {
          ...meta.docs,
          url: urlCreator(name),
        },
      },
      create(context: RuleContext<TMessageIds, TOptions>): TRuleListener {
        const optionsWithDefault = ESLintUtils.applyDefault(
          defaultOptions,
          context.options
        );
        return create(context, optionsWithDefault);
      },
    };
  };
