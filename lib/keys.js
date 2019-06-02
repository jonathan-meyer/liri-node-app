require("dotenv").config();

module.exports.bandsintown = {
  url: process.env.BANDSINTOWN_URL,
  app_id: process.env.BANDSINTOWN_ID
};

module.exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

module.exports.omdb = {
  url: process.env.OMDB_URL,
  key: process.env.OMDB_KEY
};
