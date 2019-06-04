const axios = require("axios");
const moment = require("moment");
const querystring = require("querystring");

module.exports = function(keys) {
  if (keys === undefined) {
    throw "keys are required";
  }

  this.find = artist =>
    artist
      ? axios
          .get(
            [
              `${keys.url}/artists/${artist}/events`,
              querystring.stringify({ app_id: keys.app_id })
            ].join("?")
          )
          .then(res => res.data)
          .then(data => {
            return data.map(event => ({
              venue: event.venue.name,
              location: `${event.venue.city}, ${event.venue.region} ${
                event.venue.country
              }`,
              date: moment(event.datetime).format("MM/DD/YYYY")
            }));
          })
          .catch(console.error)
      : Promise.reject("\n\n  >>> no artist given\n\n");
};
