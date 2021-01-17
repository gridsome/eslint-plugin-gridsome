export const getPathFromProjectRoot = (filename: string, cwd: string) =>
  filename.split("/").splice(cwd.split("/").length).join("/");
