// @see https://github.com/vuejs/eslint-plugin-vue/blob/master/lib/utils/index.js

const assert = require("assert");

module.exports = {
  /**
   * Register the given visitor to parser services.
   * If the parser service of `vue-eslint-parser` was not found,
   * this generates a warning.
   *
   * @param {RuleContext} context The rule context to use parser services.
   * @param {Object} templateBodyVisitor The visitor to traverse the template body.
   * @param {Object} [scriptVisitor] The visitor to traverse the script.
   * @returns {Object} The merged visitor.
   */
  defineTemplateBodyVisitor(context, templateBodyVisitor, scriptVisitor) {
    if (context.parserServices.defineTemplateBodyVisitor == null) {
      context.report({
        loc: { line: 1, column: 0 },
        message:
          "Use the latest vue-eslint-parser. See also https://vuejs.github.io/eslint-plugin-vue/user-guide/#what-is-the-use-the-latest-vue-eslint-parser-error"
      });
      return {};
    }
    return context.parserServices.defineTemplateBodyVisitor(
      templateBodyVisitor,
      scriptVisitor
    );
  },
  /**
   * Check whether the given start tag has specific directive.
   * @param {ASTNode} node The start tag node to check.
   * @param {string} name The attribute name to check.
   * @param {string} [value] The attribute value to check.
   * @returns {boolean} `true` if the start tag has the attribute.
   */
  hasAttribute(node, name, value) {
    assert(node && node.type === "VElement");
    return Boolean(this.getAttribute(node, name, value));
  },

  /**
   * Check whether the given start tag has specific directive.
   * @param {ASTNode} node The start tag node to check.
   * @param {string} name The directive name to check.
   * @param {string} [argument] The directive argument to check.
   * @returns {boolean} `true` if the start tag has the directive.
   */
  hasDirective(node, name, argument) {
    assert(node && node.type === "VElement");
    return Boolean(this.getDirective(node, name, argument));
  },

  /**
   * Check whether the given attribute has their attribute value.
   * @param {ASTNode} node The attribute node to check.
   * @returns {boolean} `true` if the attribute has their value.
   */
  hasAttributeValue(node) {
    assert(node && node.type === "VAttribute");
    return (
      node.value != null &&
      (node.value.expression != null || node.value.syntaxError != null)
    );
  },

  /**
   * Get the attribute which has the given name.
   * @param {ASTNode} node The start tag node to check.
   * @param {string} name The attribute name to check.
   * @param {string} [value] The attribute value to check.
   * @returns {ASTNode} The found attribute.
   */
  getAttribute(node, name, value) {
    assert(node && node.type === "VElement");
    return node.startTag.attributes.find(
      a =>
        !a.directive &&
        a.key.name === name &&
        (value === undefined || (a.value != null && a.value.value === value))
    );
  },

  /**
   * Get the directive which has the given name.
   * @param {ASTNode} node The start tag node to check.
   * @param {string} name The directive name to check.
   * @param {string} [argument] The directive argument to check.
   * @returns {ASTNode} The found directive.
   */
  getDirective(node, name, argument) {
    assert(node && node.type === "VElement");
    return node.startTag.attributes.find(
      a =>
        a.directive &&
        a.key.name.name === name &&
        (argument === undefined ||
          (a.key.argument && a.key.argument.name) === argument)
    );
  }
};
