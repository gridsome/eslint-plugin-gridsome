import { AST } from "vue-eslint-parser";

/**
 * Get the attribute which has the given name.
 */
export const getAttribute = (
  node: AST.VElement,
  name: string,
  value?: string
) =>
  node.startTag.attributes.find(
    (a) =>
      !a.directive &&
      a.key.name === name &&
      (value === undefined || (a.value != null && a.value.value === value))
  );

/**
 * Check whether the given start tag has specific directive.
 */
export const hasAttribute = (
  node: AST.VElement,
  name: string,
  value?: string
) => Boolean(getAttribute(node, name, value));
