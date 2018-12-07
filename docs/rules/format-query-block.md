## enforce consistent format style in query block ex) `<page-query>`,`<static-query>`(gridsome/format-query-block)

- :wrench: The `--fix` option on the [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) can automatically fix some of the problems reported by this rule.

- This rule checks the consistency of a code in `<page-query>` and `<static-query>` tags.
- This rule's formatter is [Prettier](https://prettier.io). [Parser is `graphql`](https://prettier.io/docs/en/options.html#parser)

## :book: Rule Details

:-1: Examples of **incorrect** code for this rule:

```html
<page-query>
  query Blog { allWordPressPost (limit: 5) { edges { node { id title } }} }
</page-query>
```

```html
<static-query>
  query Example { example: examplePage(path: "/docs/example") { content }}
</static-query>
```

:+1: Examples of **correct** code for this rule:

```html
<page-query>
  query Blog { allWordPressPost(limit: 5) { edges { node { id title } } } }
</page-query>
```

```html
<static-query>
  query Example { example: examplePage(path: "/docs/example") { content } }
</static-query>
```

## :wrench: Options

Nothing.
