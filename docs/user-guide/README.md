---
title: User Guide
---

# User Guide

## 💿Installation

```bash
npm install eslint eslint-plugin-gridsome vue-eslint-parser -D
```

::: tip
There is a reason to install `vue-eslint-parser`.  
eslint-plugin-gridsome has been using vue-eslint-parser over the ^6.0.4 version.  
If you want to use other eslint plugin package, be careful vue-eslint-parser's version.
:::

## 💻Usage

### plugins

Example **.eslintrc.js**:

```javascript
module.exports = {
  parser: "vue-eslint-parser",
  plugins: ["gridsome"],
  rules: {
    "gridsome/format-query-block": "error"
    ...
  },
};
```

### extends

You also can use [extends](https://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin).

```diff
module.exports = {
  parser: "vue-eslint-parser",
+ extends: ["plugin:gridsome/recommended"],
- plugins: ["gridsome"],
- rules: {
-   "gridsome/format-query-block": "error"
-    ...
- },
};
```

Available extends:

- [gridsome/recommended](https://github.com/gridsome/eslint-plugin-gridsome/blob/45395586e812167f1c1eb7e9c02d4e4a86b2b9ff/lib/configs/recommended.js)
