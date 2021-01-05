import path from "path";
import fs from "fs";

export const loadFixtureCreator = (
  fixtureDirectoryFromRoot: string
) => (params: {
  fixtureDirectory: string;
  hasOutputFile?: boolean;
  filenames?: {
    code?: string;
    output?: string;
  };
}) => {
  const file = {
    code: params.filenames?.code || "code.vue",
    output: params.filenames?.output || "output.vue",
  };
  if (params.hasOutputFile) {
    return {
      code: fs.readFileSync(
        path.join(
          `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/${file.code}`
        ),
        { encoding: "utf8" }
      ),
      output: fs.readFileSync(
        path.join(
          `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/${file.output}`
        ),
        { encoding: "utf8" }
      ),
    };
  }

  return {
    code: fs.readFileSync(
      path.join(
        `${fixtureDirectoryFromRoot}/${params.fixtureDirectory}/${file.code}`
      ),
      { encoding: "utf8" }
    ),
  };
};
