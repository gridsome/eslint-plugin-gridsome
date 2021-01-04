import { envParse } from "../../../lib/utils/env-parse";

import { expect } from "chai";

describe("envParse", () => {
  it("when pass env contents, parse into JSON object", () => {
    const contents = `
    ENV1=foo
    ENV2=bar
    ENV3=include=====
    #ENV1=comment
    #   ENV2=comment
    `;

    const result = envParse(contents);

    expect(result).to.deep.equal({
      ENV1: "foo",
      ENV2: "bar",
      ENV3: "include=====",
    });
  });
});
