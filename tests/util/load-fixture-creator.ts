import path from "path";
import fs from "fs";

export const loadFixtureCreator = (
  fixtureDirectoryFromRoot: string
) => (params: { fixtureDirectory: string; hasOutputFile?: boolean }) => {
  if (params.hasOutputFile) {
    return {
      code: fs.readFileSync(
        path.join(
          `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/code.vue`
        ),
        { encoding: "utf8" }
      ),
      output: fs.readFileSync(
        path.join(
          `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/output.vue`
        ),
        { encoding: "utf8" }
      ),
    };
  }

  return {
    code: fs.readFileSync(
      path.join(
        `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/code.vue`
      ),
      { encoding: "utf8" }
    ),
  };
};
