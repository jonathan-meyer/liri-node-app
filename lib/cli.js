const path = require("path");
const exec = require("child_process").exec;

module.exports = (args, cwd) =>
  new Promise(resolve => {
    exec(
      `node ${path.resolve("./liri")} ${args.join(" ")}`,
      { cwd },
      (error, stdout, stderr) => {
        resolve({
          code: error && error.code ? error.code : 0,
          error,
          stdout,
          stderr
        });
      }
    );
  });
