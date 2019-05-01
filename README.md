# eslint-plugin-gridsome

[![npm version](https://badge.fury.io/js/eslint-plugin-gridsome.svg)](https://badge.fury.io/js/eslint-plugin-gridsome)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This is ESlint plugin for [Gridsome](https://gridsome.org/).

## usage

```bash
$ yarn add eslint eslint-plugin-gridsome vue-eslint-parser -D
```

```javascript
// .eslintrc.*
// this sample is .eslintrc.js

module.exports = {
  env: {
    node: true,
    es6: true
  },
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
    ...
  },
  parser: "vue-eslint-parser"
};
```

or

```bash
$ yarn add eslint eslint-plugin-gridsome -D
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

## contributing

Check [CONTRIBUTING.md](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/CONTRIBUTING.md).

## configs

- [recommended](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/lib/configs/recommended.js)

## Rules

| Rule Name                                                                                                               | Description                                                                    |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| [format-query-block](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/format-query-block.md)   | Format fix for `<page-query>` and `<static-query>` in .vue. Using Prettier API |
| [require-g-image-src](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-image-src.md) | Require v-bind:src or src of <g-image> elements                                |
| [require-g-link-to](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/docs/rules/require-g-link-to.md)     | Require v-bind:to or to of <g-link> elements                                   |
