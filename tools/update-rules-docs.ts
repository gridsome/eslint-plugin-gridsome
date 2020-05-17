import fs from "fs";
import path from "path";

import { getRulesMetaData, createRuleDocs, DIR_DOCS } from "./util";

const rulesDocsPath = path.join(DIR_DOCS, "rules", "README.md");

export const updateRulesDocs = async () => {
  const { rulesMetaData } = await getRulesMetaData();

  const { doc } = createRuleDocs(rulesMetaData);

  fs.writeFileSync(rulesDocsPath, doc);
};
