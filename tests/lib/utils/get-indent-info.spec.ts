import { getIndentInfo } from "../../../lib/utils/get-indent-info";
import path from "path";

import {
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
} from "../../../lib/utils/get-prettier-option";
import { expect } from "chai";

describe("getIndentInfo", () => {
  describe("not use prettierrc", () => {
    it("when not use prettierrc, baseIndent is default tabWidth value indentChar is space", () => {
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
        baseIndent: 2,
        indentChar: " ",
      });
    });
  });

  describe("use prettierrc", () => {
    it("when tabWidth is 4, baseIndent is 4 indentChar is space", () => {
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
        baseIndent: 4,
        indentChar: " ",
      });
    });

    it("when useTabs is true, baseIndent is fixed 1 indentChar is tab", () => {
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
        baseIndent: 1,
        indentChar: "\t",
      });
    });

    it("when useTabs and tabWidth is not set value, baseIndent and indentChar are treated same as not use prettierrc", () => {
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
        baseIndent: 2,
        indentChar: " ",
      });
    });
  });
});
