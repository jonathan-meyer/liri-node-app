const axios = require("axios");
const moment = require("moment");
const querystring = require("querystring");

const getRating = (ratings, source) =>
  ratings.filter(r => r.Source === source).reduce((p, c) => c.Value, undefined);

module.exports = function(keys) {
  if (keys === undefined) {
    throw "keys are required";
  }

  this.find = movie =>
    axios
      .get(
        [
          `${keys.url}`,
          querystring.stringify({
            t: movie,
            apiKey: keys.key
          })
        ].join("?")
      )
      .then(res => res.data)
      .then(data => ({
        title: data.Title,
        year: data.Year,
        imdbRating: getRating(data.Ratings, "Internet Movie Database"),
        rtRating: getRating(data.Ratings, "Rotten Tomatoes"),
        country: data.Country,
        language: data.Language,
        plot: data.Plot,
        actors: data.Actors
      }));
};
