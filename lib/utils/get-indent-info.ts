import prettier from "prettier";

import { MergedPrettierOption } from "./get-prettier-option";
import { PrettierSupportOptionName } from "./types";

const indent = {
  space: " ",
  tab: "\t",
};

export type OverridePrettierOption = {
  tabWidth: number;
  useTabs: boolean;
  vueIndentScriptAndStyle: boolean;
};

type PrettierOptions = {
  [key in PrettierSupportOptionName]: prettier.SupportOption["default"];
};

/**
 * Get indent information
 */
export const getIndentInfo = (
  mergedPrettierOptions: MergedPrettierOption,
  eslintOption?: OverridePrettierOption
) => {
  const defaultInfo = {
    baseIndent: 0,
    indentChar: indent.space,
  };

  const { tabWidth, useTabs } = mergedPrettierOptions as PrettierOptions;

  const result = {
    baseIndent: tabWidth as number,
    indentChar: defaultInfo.indentChar,
  };

  if (useTabs) {
    result.baseIndent = 1;
    result.indentChar = indent.tab;
  }

  return { ...defaultInfo, ...result };
};
