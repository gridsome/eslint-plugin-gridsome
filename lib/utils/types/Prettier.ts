/**
 * @see https://prettier.io/docs/en/options.html
 */
type PrettierDefaultOptionName =
  | "arrowParens"
  | "bracketSpacing"
  | "cursorOffset"
  | "endOfLine"
  | "filepath"
  | "htmlWhitespaceSensitivity"
  | "insertPragma"
  | "jsxBracketSameLine"
  | "jsxSingleQuote"
  | "parser"
  | "pluginSearchDirs"
  | "plugins"
  | "printWidth"
  | "proseWrap"
  | "quoteProps"
  | "rangeEnd"
  | "rangeStart"
  | "requirePragma"
  | "semi"
  | "singleQuote"
  | "tabWidth"
  | "trailingComma"
  | "useTabs"
  | "vueIndentScriptAndStyle";

/**
 * Note: If eslint-plugin-gridsome supoprts prettier's plugin, define type like PrettierDefaultOptionName. Then, merge type at this type.
 */
export type PrettierSupportOptionName = PrettierDefaultOptionName;
