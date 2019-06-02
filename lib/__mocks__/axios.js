const axios = jest.genMockFromModule("axios");

axios.get = url => {
  let data = {};

  if (url.match(/www\.omdbapi\.com/)) {
    data = require("./The-Princess-Bride.json");
  }

  if (url.match(/rest\.bandsintown\.com/)) {
    data = require("./Journey.json");
  }

  return Promise.resolve({ data });
};

module.exports = axios;
