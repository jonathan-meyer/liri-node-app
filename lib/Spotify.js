const Spotify = require("node-spotify-api");

module.exports = function(keys) {
  if (keys === undefined) {
    throw "keys are required";
  }

  const spotify = new Spotify(keys);

  this.find = song =>
    spotify
      .search({
        type: "track",
        query: song || "The Sign (US Album) [Remastered]",
        limit: 1
      })
      .then(({ tracks }) =>
        tracks.items.map(item => ({
          artist: item.artists.map(artist => artist.name).join(", "),
          songTitle: item.name,
          albumTitle: item.album.name,
          previewUrl: item.preview_url
        }))
      );
};
