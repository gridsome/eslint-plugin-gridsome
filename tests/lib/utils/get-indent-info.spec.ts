import { getIndentInfo } from "../../../lib/utils/get-indent-info";
import path from "path";

import {
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
} from "../../../lib/utils/get-prettier-option";
import { expect } from "chai";

const indent = {
  space: " ",
  tab: "\t",
  none: "",
};

describe("getIndentInfo", () => {
  describe("not use prettierrc", () => {
    it("when not use prettierrc, it means vueIndentScriptAndStyle is false. So indentRepeatTime is 0, and indentChar is empty string", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-indent-info",
        "not-use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 0,
        indentChar: indent.none,
      });
    });
  });

  describe("use prettierrc", () => {
    it("when tabWidth is 4, indentRepeatTime is 4 indentChar is space", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-indent-info",
        "use-prettierrc",
        "set-tab-width",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 4,
        indentChar: indent.space,
      });
    });

    it("when useTabs is true, indentRepeatTime is fixed 1 indentChar is tab", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-indent-info",
        "use-prettierrc",
        "set-use-tabs",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 1,
        indentChar: indent.tab,
      });
    });

    it("when not set value of useTabs, tabWidth, and vueIndentScriptAndStyle, indentRepeatTime is 0, and indentChar is empty string", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-indent-info",
        "use-prettierrc",
        "set-other-option",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 0,
        indentChar: indent.none,
      });
    });
  });
});
