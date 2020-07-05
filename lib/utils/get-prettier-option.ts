import prettier from "prettier";

type PrettierOptions = {
  [key: string]: prettier.SupportOption["default"];
};

/**
 * Get Prettier's default option
 */
export const getPrettierDefaultOption = prettier
  .getSupportInfo()
  .options.reduce<PrettierOptions>((acc, option) => {
    acc[option.name] = option.default;
    return acc;
  }, {});

// /**
//  * Get option from .prettierrc
//  */
export const getPrettierRcOption = (filePath: string) =>
  prettier.resolveConfig.sync(filePath, {
    editorconfig: true,
  }) as PrettierOptions | null;

// /**
//  * Get option merged getPrettierDefaultOption and getPrettierRcOption
//  */
export const getMergedPrettierOption = (
  prettierDefaultOption: typeof getPrettierDefaultOption,
  prettierRcOption: ReturnType<typeof getPrettierRcOption>
) => ({
  ...prettierDefaultOption,
  ...prettierRcOption,
});

export type MergedPrettierOption = ReturnType<typeof getMergedPrettierOption>;
