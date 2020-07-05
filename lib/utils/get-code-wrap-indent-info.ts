import prettier from "prettier";

import { MergedPrettierOption } from "./get-prettier-option";
import { PrettierSupportOptionName } from "./types";

const indent = {
  space: " ",
  tab: "\t",
  none: "",
};

export type OverridePrettierOption =
  | {
      tabWidth?: number;
      useTabs?: boolean;
      vueIndentScriptAndStyle?: boolean;
    }
  | undefined;

type PrettierOptions = {
  [key in PrettierSupportOptionName]: prettier.SupportOption["default"];
};

/**
 * Get indent information
 */
export const getCodeWrapIndentInfo = (
  mergedPrettierOptions: MergedPrettierOption,
  eslintOption?: OverridePrettierOption
) => {
  const defaultInfo = {
    indentRepeatTime: 0,
    indentChar: indent.space,
  };

  const prettierOptions = mergedPrettierOptions as PrettierOptions;

  const tabWidth = eslintOption?.tabWidth || prettierOptions.tabWidth;
  const useTabs = eslintOption?.useTabs ?? prettierOptions.useTabs;
  const vueIndentScriptAndStyle =
    eslintOption?.vueIndentScriptAndStyle ??
    prettierOptions.vueIndentScriptAndStyle;

  const result = {
    indentRepeatTime: tabWidth as number,
    indentChar: defaultInfo.indentChar,
  };

  if (useTabs) {
    result.indentRepeatTime = 1;
    result.indentChar = indent.tab;
  }

  if (!vueIndentScriptAndStyle) {
    result.indentRepeatTime = 0;
    result.indentChar = indent.none;
  }

  return { ...defaultInfo, ...result };
};
