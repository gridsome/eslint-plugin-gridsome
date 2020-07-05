import { getCodeWrapIndentInfo } from "../../../lib/utils/get-code-wrap-indent-info";
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

describe("getCodeWrapIndentInfo", () => {
  describe("not use prettierrc", () => {
    it("when not use prettierrc, it means vueIndentScriptAndStyle is false. So indentRepeatTime is 0, and indentChar is empty string", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-code-wrap-indent-info",
        "not-use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getCodeWrapIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 0,
        indentChar: indent.none,
      });
    });

    it("when not use prettierrc, follow option value if set eslint option", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-code-wrap-indent-info",
        "not-use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const eslintOption = {
        vueIndentScriptAndStyle: true,
      };

      const result = getCodeWrapIndentInfo(mergedPrettierOption, eslintOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 2,
        indentChar: indent.space,
      });
    });
  });

  describe("use prettierrc", () => {
    it("when tabWidth is 4, indentRepeatTime is 4 indentChar is space", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-code-wrap-indent-info",
        "use-prettierrc",
        "set-tab-width",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getCodeWrapIndentInfo(mergedPrettierOption);

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
        "get-code-wrap-indent-info",
        "use-prettierrc",
        "set-use-tabs",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const result = getCodeWrapIndentInfo(mergedPrettierOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 1,
        indentChar: indent.tab,
      });
    });
  });

  describe("override-prettier-option", () => {
    it("when not use prettierrc and use eslint option, override value of indentRepeatTime and indentChar", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-code-wrap-indent-info",
        "override-prettier-option",
        "not-use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const eslintOption = {
        vueIndentScriptAndStyle: true,
        tabWidth: 10,
      };

      const result = getCodeWrapIndentInfo(mergedPrettierOption, eslintOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 10,
        indentChar: indent.space,
      });
    });

    it("when use prettierrc and use eslint option, follow prettierrc option and then override eslint option", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixtures",
        "get-code-wrap-indent-info",
        "override-prettier-option",
        "use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const mergedPrettierOption = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      const eslintOption = {
        vueIndentScriptAndStyle: true,
        tabWidth: 4,
      };

      const result = getCodeWrapIndentInfo(mergedPrettierOption, eslintOption);

      expect(result).to.deep.equal({
        indentRepeatTime: 4,
        indentChar: indent.space,
      });
    });
  });
});
