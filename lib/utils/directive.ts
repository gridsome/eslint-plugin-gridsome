import { AST } from "vue-eslint-parser";

/**
 * Get the directive which has the given name.
 * @param {ASTNode} node The start tag node to check.
 * @param {string} name The directive name to check.
 * @param {string} [argument] The directive argument to check.
 * @returns {ASTNode} The found directive.
 */
export const getDirective = (
  node: AST.VElement,
  name: string,
  argument: string
) =>
  node.startTag.attributes.find(
    (a) =>
      a.directive &&
      a.key.name.name === name &&
      (argument === undefined ||
        (a.key.argument &&
          a.key.argument.type === "VIdentifier" &&
          a.key.argument.name) === argument)
  );

/**
 * Check whether the given start tag has specific directive.
 * @param {ASTNode} node The start tag node to check.
 * @param {string} name The directive name to check.
 * @param {string} [argument] The directive argument to check.
 * @returns {boolean} `true` if the start tag has the directive.
 */
export const hasDirective = (
  node: AST.VElement,
  name: string,
  argument: string
) => Boolean(getDirective(node, name, argument));
