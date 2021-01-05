import { Env } from "../../../lib/utils/env";

import { expect } from "chai";

describe("env", () => {
  describe("parse", () => {
    it("to JSON object", () => {
      const source = `
ENV1=foo
`;

      const env = new Env(source);

      const result = env.parse();

      expect(result.get("ENV1")).to.deep.equal("foo");
    });

    it("to JSON object even if include =", () => {
      const source = `
ENV1======
`;

      const env = new Env(source);

      const result = env.parse();

      expect(result.get("ENV1")).to.deep.equal("=====");
    });

    it("skip comment line", () => {
      const source = `
# ENV1=foo
ENV2=bar
`;

      const env = new Env(source);

      const result = env.parse();

      expect(result.get("ENV2")).to.deep.equal("bar");
    });

    it("skip comment line same line", () => {
      const source = `
ENV1=foo # comment
ENV2=bar
`;

      const env = new Env(source);

      const result = env.parse();

      expect(result.get("ENV1")).to.deep.equal("foo");
      expect(result.get("ENV2")).to.deep.equal("bar");
    });
  });
});
