import { getPathFromProjectRoot } from "../../../lib/utils/path";

import { expect } from "chai";

describe("path", () => {
  describe("getPathFromProjectRoot", () => {
    it("when call getPathFromProjectRoot with context.getFilename() and process.cwd(), return path from project root", () => {
      const filename = "/User/path/to/project/src/index.js";
      const cwd = "/User/path/to/project";

      const result = getPathFromProjectRoot(filename, cwd);

      expect(result).to.deep.equal("src/index.js");
    });
  });
});
