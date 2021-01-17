const COMMENT_PREFIX = "#";
const SEPARATER_COMMENT = "=";
const SEPARATER_SPACE = /( |　)+/;
const NEWLINES = /\n|\r|\r\n/;

const isCommentCode = (line: string) => line.charAt(0) === COMMENT_PREFIX;

export class Env {
  constructor(private source: string) {}

  public parse() {
    const result = new Map<string, string>();

    this.source
      .toString()
      .trim()
      .split(NEWLINES)
      .forEach((line) => {
        const trimmedLine = line.trim();

        if (isCommentCode(trimmedLine)) return;

        const [key, ...value] = trimmedLine.split(SEPARATER_COMMENT);
        const joinedValue = value
          .join(SEPARATER_COMMENT)
          .split(SEPARATER_SPACE)[0];

        result.set(key, joinedValue);
      });

    return result;
  }
}
