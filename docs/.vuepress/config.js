const { rules } = require("../../lib");

module.exports = {
  title: "eslint-plugin-gridsome",
  description: "ESLint plugin for Gridsome",
  evergreen: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],

  themeConfig: {
    repo: "gridsome/eslint-plugin-gridsome",
    docsRepo: "gridsome/eslint-plugin-gridsome",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    nav: [
      { text: "User Guide", link: "/user-guide/" },
      { text: "Developer Guide", link: "/developer-guide/" },
      { text: "Rules", link: "/rules/" },
      { text: "Gridsome", link: "https://gridsome.org/" }
    ],
    sidebar: {
      "/rules/": ["/rules/", ...Object.keys(rules)],
      "/": ["/introduction/", "/user-guide/", "/developer-guide/", "/rules/"]
    }
  }
};
