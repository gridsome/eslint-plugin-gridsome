import { TSESLint, TSESTree } from "@typescript-eslint/experimental-utils";

/**
 * @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/experimental-utils/src/ts-eslint/Rule.ts
 */

type ReportDescriptor<TMessageIds> = {
  node: any;
  loc?: TSESTree.SourceLocation | TSESTree.LineAndColumnData;
  messageId: TMessageIds;
  data?: Record<string, any>;

  [K: string]: any;
};

export interface RuleContext<
  TMessageIds extends string,
  TOptions extends readonly unknown[]
> {
  /**
   * The rule ID.
   */
  id: string;
  /**
   * An array of the configured options for this rule.
   * This array does not include the rule severity.
   */
  options: TOptions;
  /**
   * The shared settings from configuration.
   * We do not have any shared settings in this plugin.
   */
  settings: Record<string, any>;
  /**
   * The name of the parser from configuration.
   */
  parserPath: string;
  /**
   * The parser options configured for this run
   */
  parserOptions: any;
  /**
   * An object containing parser-provided services for rules
   */
  parserServices?: any;
  /**
   * Returns an array of the ancestors of the currently-traversed node, starting at
   * the root of the AST and continuing through the direct parent of the current node.
   * This array does not include the currently-traversed node itself.
   */
  getAncestors(): any[];
  /**
   * Returns a list of variables declared by the given node.
   * This information can be used to track references to variables.
   */
  getDeclaredVariables(node: any): any[];
  /**
   * Returns the filename associated with the source.
   */
  getFilename(): string;
  /**
   * Returns the scope of the currently-traversed node.
   * This information can be used track references to variables.
   */
  getScope(): any;
  /**
   * Returns a SourceCode object that you can use to work with the source that
   * was passed to ESLint.
   */
  getSourceCode(): any;
  /**
   * Marks a variable with the given name in the current scope as used.
   * This affects the no-unused-vars rule.
   */
  markVariableAsUsed(name: string): boolean;
  /**
   * Reports a problem in the code.
   */
  report(descriptor: ReportDescriptor<TMessageIds>): void;
}

/**
 * eslint-plugin-gridsome traverse only Program.
 */
export type RuleListener = Pick<TSESLint.RuleListener, "Program">;
