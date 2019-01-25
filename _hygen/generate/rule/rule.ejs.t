---
to: lib/rules/<%= name %>.js
---
/**
 * @author <%= author %>
 * @copyright <%= new Date().getFullYear() %> <%= author %>. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// Settings
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "",
    docs: {
      description: "<%= description %>",
      category: "",
      recommended: false,
      url: "<%= h.REPO_URL() %>/blob/master/docs/rules/<%= name %>.md",
    },
    fixable: "",
    schema: [],
    deprecated: false,
    replacedBy: []
  },
  create(context) {}
};
















