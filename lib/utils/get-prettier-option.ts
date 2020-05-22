import prettier from "prettier";

/**
 * Get Prettier's default option
 */
export const getPrettierDefaultOption = prettier
  .getSupportInfo()
  .options.reduce((acc, option) => {
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
