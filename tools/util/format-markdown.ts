import prettier from "prettier";

export const formatMarkdown = (content: string) =>
  prettier.format(content, { parser: "markdown" });
