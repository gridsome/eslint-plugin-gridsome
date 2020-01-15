<p align="center"><img width="143px" height="130px" src="https://raw.githubusercontent.com/gridsome/eslint-plugin-gridsome/master/assets/logo/eslint-plugin-gridsome.png" alt="ESLint plugin for Gridsome"></p>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<h2 align="center">eslint-plugin-gridsome</h2>
<p align="center">
  This is ESlint plugin for <a href="https://gridsome.org/" rel="nofollow">Gridsome</a>.
</p>
<p align="center">
  <a title="Current version" href="https://badge.fury.io/js/eslint-plugin-gridsome" rel="nofollow">
    <img src="https://badge.fury.io/js/eslint-plugin-gridsome.svg">
  </a>
  <a title="MIT License" href="[LICENSE](https://opensource.org/licenses/MIT)" rel="nofollow">
    <img src="https://img.shields.io/badge/License-MIT-green.svg">
  </a>
  <br>
  <br>
</p>

## usage

```bash
$ npm install eslint eslint-plugin-gridsome vue-eslint-parser -D
```

### Tip: 👩‍🚀

There is a reason to install `vue-eslint-parser`.
eslint-plugin-gridsome has been using vue-eslint-parser over the ^6.0.4 version.
If you want to use other eslint plugin package, be careful vue-eslint-parser's version.

```javascript
// .eslintrc.*
// this sample is .eslintrc.js

module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
    ...
  },
};
```

or

```bash
$ npm install eslint eslint-plugin-gridsome -D
```

```javascript
module.exports = {
  plugins: ["gridsome"],
  extends: ["plugin:gridsome/recommended"]
};
```

If you want to use `eslint-config-prettier`, you set that before gridsome configs.

```javascript
module.exports = {
  plugins: ["gridsome"],
  extends: ["prettier", "plugin:gridsome/recommended"]
};
```

## configs

- [recommended](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/lib/configs/recommended.js)

## contributing

Check [CONTRIBUTING.md](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/CONTRIBUTING.md).

## Rules

| Rule Name                                                                                                               | Description                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [format-query-block](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/format-query-block.md)   | Format fix for `<page-query>` and `<static-query>` in .vue. Using Prettier API |
| [require-g-image-src](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-image-src.md) | Require v-bind:src or src of `<g-image>` elements                              |
| [require-g-link-to](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-link-to.md)     | Require v-bind:to or to of `<g-link>` elements                                 |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://tyankatsu.netlify.com/"><img src="https://avatars0.githubusercontent.com/u/28397593?v=4" width="100px;" alt=""/><br /><sub><b>tyankatsu</b></sub></a><br /><a href="https://github.com/gridsome/eslint-plugin-gridsome/commits?author=tyankatsu0105" title="Code">💻</a> <a href="https://github.com/gridsome/eslint-plugin-gridsome/commits?author=tyankatsu0105" title="Documentation">📖</a> <a href="#maintenance-tyankatsu0105" title="Maintenance">🚧</a> <a href="https://github.com/gridsome/eslint-plugin-gridsome/commits?author=tyankatsu0105" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!