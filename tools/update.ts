import { updateRulesDocs } from "./update-rules-docs";
// import { updateRulesList } from "./update-rules-list";

// eslint-disable-next-line @mysticatea/ts/no-floating-promises
(async () => {
  await updateRulesDocs();
  // @todo use if lib supports TS.
  // await updateRulesList();
})();
