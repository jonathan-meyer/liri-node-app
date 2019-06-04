const Spotify = jest.genMockFromModule("node-spotify-api");
const data = require("./Eat-It.json");

Spotify.prototype.search = obj => Promise.resolve(data);

module.exports = Spotify;
