const COMMENT_PREFIX = "#";
const SPEARATER = "=";
const NEWLINES = /\n|\r|\r\n/;

const isCommentCode = (line: string) => line.charAt(0) === COMMENT_PREFIX;

export const envParse = (contents: string) => {
  const result: {
    [key: string]: string;
  } = {};
  contents
    .toString()
    .trim()
    .split(NEWLINES)
    .forEach((line) => {
      const trimmedLine = line.trim();

      if (isCommentCode(trimmedLine)) return;

      const [key, ...value] = trimmedLine.split(SPEARATER);
      result[key] = value.join(SPEARATER);
    });

  return result;
};
