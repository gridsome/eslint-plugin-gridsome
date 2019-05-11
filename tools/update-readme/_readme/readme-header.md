<p align="center"><img width="143px" height="130px" src="https://raw.githubusercontent.com/gridsome/eslint-plugin-gridsome/master/assets/logo/eslint-plugin-gridsome.png" alt="ESLint plugin for Gridsome"></p>


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
$ yarn add eslint eslint-plugin-gridsome vue-eslint-parser -D
```

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
