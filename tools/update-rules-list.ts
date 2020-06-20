import fs from "fs";

import { getRulesMetaData, createRulesList, DIR_LIB } from "./util";

const rulesListPath = `${DIR_LIB}/rules.ts`;

export const updateRulesList = async () => {
  const { rulesMetaData } = await getRulesMetaData();
  const { list } = await createRulesList(rulesMetaData);

  if (list !== undefined) {
    fs.writeFileSync(rulesListPath, list);
  }
};
