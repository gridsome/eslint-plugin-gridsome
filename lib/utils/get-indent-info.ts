import { MergedPrettierOption } from "./get-prettier-option";

const indent = {
  space: " ",
  tab: "\t",
};

/**
 * Get indent information
 */
export const getIndentInfo = (mergedPrettierOptions: MergedPrettierOption) => {
  const defaultInfo = {
    baseIndent: 0,
    indentChar: indent.space,
  };

  const { tabWidth, useTabs } = mergedPrettierOptions;

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
