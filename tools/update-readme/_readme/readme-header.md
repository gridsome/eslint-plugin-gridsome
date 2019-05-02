<p align="center"><img width="143px" height="130px" src="./assets/logo/eslint-plugin-gridsome.svg" alt="ESLint plugin for Gridsome"></p>

<h1 align="center">eslint-plugin-gridsome</h1>

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
  extends: ["plugin:gridsome/recommended"],
};
```

If you want to use `eslint-config-prettier`, you set that before gridsome configs.
```javascript
module.exports = {
  plugins: ["gridsome"],
  extends: ["prettier", "plugin:gridsome/recommended"],
};
```

## configs

- [recommended](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/lib/configs/recommended.js)

## contributing

Check [CONTRIBUTING.md](https://github.com/gridsome/eslint-plugin-gridsome/blob/master/CONTRIBUTING.md).

## Rules
