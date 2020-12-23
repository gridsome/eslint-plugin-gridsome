---
title: use-env-prefix
sidebarDepth: 0
description: Use prefix `GRIDSOME_` when using process.env in browser
---

## Use prefix `GRIDSOME_` when using process.env in browser (gridsome/use-env-prefix)

## :book: Rule Details

- This rule reports the `process.env` expression which do not include prefix `GRIDSOME_`.

If you want to know more information, see: [Environment variables](https://gridsome.org/docs/environment-variables/)

:-1: Examples of **incorrect** code for this rule:

```html
<template></template>
<script>
  export default {
    data() {
      return {
        url: process.env.API_URL, // Possible error
      };
    },
  };
</script>
```

:+1: Examples of **correct** code for this rule:

```html
<template></template>
<script>
  export default {
    data() {
      return {
        url: process.env.GRIDSOME_API_URL,
      };
    },
  };
</script>
```

## :wrench: Options

Nothing.
