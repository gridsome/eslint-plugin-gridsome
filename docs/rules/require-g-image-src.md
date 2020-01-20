---
title: require-g-image-src
sidebarDepth: 0
description: Require v-bind:src or src of `<g-image>` elements
---

## Require v-bind:src or src of `<g-image>` elements (gridsome/require-g-image-src)

## :book: Rule Details

- This rule reports the `<g-image>` elements which do not have `v-bind:src` or `src`.

:-1: Examples of **incorrect** code for this rule:

```html
<template>
  <div>
    <g-image width="500" />
    <g-image width="500" height="500" />
  </div>
</template>
```

:+1: Examples of **correct** code for this rule:

```html
<template>
  <div>
    <g-image src="http://www.example.com/foo.jpg" />
    <g-image :src="path.to.img" />
    <g-image v-bind:src="path.to.img" />
  </div>
</template>
```

## :wrench: Options

Nothing.
