import prettier from "prettier";
import { PrettierSupportOptionName } from "./types";

type Option = Omit<prettier.SupportOption, "name"> & {
  name: PrettierSupportOptionName;
};

const prettierOptions = prettier.getSupportInfo().options as Option[];

/**
 * Get Prettier's default option
 */
export const getPrettierDefaultOption = prettierOptions.reduce(
  (acc, option) => {
    acc[option.name] = option.default;
    return acc;
  },
  {} as {
    [key in PrettierSupportOptionName]: prettier.SupportOption["default"];
  }
);

// /**
//  * Get option from .prettierrc
//  */
export const getPrettierRcOption = (filePath: string) =>
  prettier.resolveConfig.sync(filePath, {
    editorconfig: true,
  }) as
    | {
        [key in PrettierSupportOptionName]: prettier.SupportOption["default"];
      }
    | null;

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
