const fs = require("fs");
const cli = require("../lib/cli");

module.exports = function() {
  this.execute = () =>
    new Promise((resolve, reject) => {
      fs.readFile("random.txt", "utf8", (err, data) => {
        cli(data.split(","), ".")
          .then(resolve)
          .catch(reject);
      });
    });
};
