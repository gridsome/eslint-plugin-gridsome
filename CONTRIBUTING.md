# Setup

## Generate files

if you want to create a new rule, use this command.  
This command use [Hygen](https://www.hygen.io/).

```bash
$ npm run gen:rule
```

## Development new rule

Development your awesome rule! :wrench:

### Create log file(optional)

If you want to check AST, use this command.  
`log` folder is created by Hygen.  
This folder is already added that gitignore.  
AST is outputed to `log/log.json`.

```bash
$ npm run gen:log
$ npm run log
```

## test

When write your rule's test, use this command.  
This command watch `tests/lib/rules`.

```bash
$ npm run test
```

## commit

If you want to use git commit, use this command.  
This command use [Commitizen](http://commitizen.github.io/cz-cli/).  
Commitizen's commit template is `cz-conventional-changelog`

```bash
$ npm run commit
```

# development directory

If you confirm rules in `lib/rules`, generate `development` directory with `npm run gen:development`.
And then `npm run confirm`.

# Did you contribute to eslint-plugin-gridsome❓

Great!!  
You can add contributors list with [allcontributors](https://allcontributors.org/).  
Example:

```bash
npx all-contributors add tyankatsu0105 code,doc,maintenance,test
```

Then, send PR.

Also check [this](https://allcontributors.org/docs/en/emoji-key).
