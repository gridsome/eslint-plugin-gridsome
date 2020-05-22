import prettier from "prettier";

type PrettierOptionNameBase =
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
 * Get Prettier's default option
 */
export const getPrettierDefaultOption: {
  [name in PrettierOptionNameBase]: prettier.SupportOption["default"];
} = prettier.getSupportInfo().options.reduce((acc, option: any) => {
  acc[option.name] = option.default;
  return acc;
}, {} as any);

// /**
//  * Get option from .prettierrc
//  */
export const getPrettierRcOption = (filePath: string) =>
  prettier.resolveConfig.sync(filePath, {
    editorconfig: true,
  });

// /**
//  * Get option merged getPrettierDefaultOption and getPrettierRcOption
//  */
export const getMergedPrettierOption = (
  prettierDefaultOption: typeof getPrettierDefaultOption,
  prettierRcOption: ReturnType<typeof getPrettierRcOption>
) => ({ ...prettierDefaultOption, ...prettierRcOption });

export type MergedPrettierOption = ReturnType<typeof getMergedPrettierOption>;
