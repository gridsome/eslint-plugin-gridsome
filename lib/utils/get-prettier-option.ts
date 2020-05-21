import prettier from "prettier";

type OptionNameWithDefault = ReturnType<typeof getPrettierRcOption>;

/**
 * Get Prettier's default option
 */
export const getPrettierDefaultOption: OptionNameWithDefault = prettier
  .getSupportInfo()
  .options.reduce((acc, option: any) => {
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
  prettierDefaultOption: OptionNameWithDefault,
  prettierRcOption: OptionNameWithDefault
) => ({ ...prettierDefaultOption, ...prettierRcOption });
