## Require v-bind:to or to of <g-link> elements (gridsome/require-g-link-to)

## :book: Rule Details

- This rule reports the `<g-link>` elements which do not have `v-bind:to` or `to`.

:-1: Examples of **incorrect** code for this rule:

```html
<template>
  <div>
    <g-link to="/" class="foo">link is here</g-link>
    <g-link :to="article.path" class="foo">link is here</g-link>
    <g-link :to="{ name: 'about' }" class="foo">link is here</g-link>
  </div>
</template>
```

:+1: Examples of **correct** code for this rule:

```html
<template>
  <div>
    <g-link class="foo">link is here</g-link>
  </div>
</template>
```

## :wrench: Options

Nothing.
