const axios = require("axios");
const moment = require("moment");
/**
 * `"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`
 */

module.exports = function(keys) {
  if (keys === undefined) {
    throw "keys are required";
  }

  this.keys = keys;

  this.find = concert => {
    return concert;
  };
};
