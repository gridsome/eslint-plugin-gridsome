import path from "path";

import {
  getPrettierDefaultOption,
  getPrettierRcOption,
  getMergedPrettierOption,
} from "../../../lib/utils/get-prettier-option";
import { expect } from "chai";

describe("getPrettierOption", () => {
  describe("getPrettierDefaultOption", () => {
    it("when call getPrettierDefaultOption, return object(key is option.name, value is option.default at prettier v2)", () => {
      const result = getPrettierDefaultOption;

      expect(result).to.deep.equal({
        arrowParens: "always",
        bracketSpacing: true,
        cursorOffset: -1,
        endOfLine: "lf",
        filepath: undefined,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        parser: undefined,
        pluginSearchDirs: [],
        plugins: [],
        printWidth: 80,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        rangeEnd: Infinity,
        rangeStart: 0,
        requirePragma: false,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        vueIndentScriptAndStyle: false,
      });
    });
  });

  describe("getPrettierRcOption", () => {
    it("when discover .prettierrc, return option object", () => {
      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixture",
        "get-prettier-option",
        "use-prettierrc",
        "file.vue"
      );

      const result = getPrettierRcOption(filePath);

      expect(result).to.deep.equal({
        arrowParens: "avoid",
        htmlWhitespaceSensitivity: "css",
      });
    });

    it("when discover .prettierrc, return null", () => {
      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixture",
        "get-prettier-option",
        "not-use-prettierrc",
        "file.vue"
      );

      const result = getPrettierRcOption(filePath);

      expect(result).to.deep.equal(null);
    });
  });

  describe("getMergedPrettierOption", () => {
    it("when discover .prettierrc, return object merged prettierDefaultOptions and .prettierrc", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixture",
        "get-prettier-option",
        "use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const result = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      expect(result).to.deep.equal({
        arrowParens: "avoid",
        bracketSpacing: true,
        cursorOffset: -1,
        endOfLine: "lf",
        filepath: undefined,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        parser: undefined,
        pluginSearchDirs: [],
        plugins: [],
        printWidth: 80,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        rangeEnd: Infinity,
        rangeStart: 0,
        requirePragma: false,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        vueIndentScriptAndStyle: false,
      });
    });

    it("when not discover .prettierrc, return object merged prettierDefaultOptions and null", () => {
      const prettierDefaultOptions = getPrettierDefaultOption;

      const filePath = path.join(
        process.cwd(),
        "tests/lib/utils/fixture",
        "get-prettier-option",
        "not-use-prettierrc",
        "file.vue"
      );
      const prettierRcOptions = getPrettierRcOption(filePath);

      const result = getMergedPrettierOption(
        prettierDefaultOptions,
        prettierRcOptions
      );

      expect(result).to.deep.equal({
        arrowParens: "always",
        bracketSpacing: true,
        cursorOffset: -1,
        endOfLine: "lf",
        filepath: undefined,
        htmlWhitespaceSensitivity: "css",
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        parser: undefined,
        pluginSearchDirs: [],
        plugins: [],
        printWidth: 80,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        rangeEnd: Infinity,
        rangeStart: 0,
        requirePragma: false,
        semi: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        vueIndentScriptAndStyle: false,
      });
    });
  });
});
