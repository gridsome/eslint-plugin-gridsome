# Setup

## Generate files

if you want to create a new rule, use this command.  
This command use [Hygen](https://www.hygen.io/).

```bash
$ yarn gen:rule
```

## Development new rule

Development your awesome rule! :wrench:

### Create log file(optional)

If you want to check AST, use this command.  
`log` folder is created by Hygen.  
This folder is already added that gitignore.  
AST is outputed to `log/log.json`.

```bash
$ yarn gen:log
$ yarn log
```

## test

When write your rule's test, use this command.  
This command watch `tests/lib/rules`.

```bash
$ yarn test
```

## commit

If you want to use git commit, use this command.  
This command use [Commitizen](http://commitizen.github.io/cz-cli/).  
Commitizen's commit template is `cz-conventional-changelog`

```bash
$ yarn commit
```
