const keys = require("./lib/keys");

const Concert = require("./lib/Concert");
const Spotify = require("./lib/Spotify");
const Movie = require("./lib/Movie");
const Script = require("./lib/Script");

const cmds = {
  "concert-this": artist => new Concert(keys.bandsintown).find(artist),
  "spotify-this-song": song => new Spotify(keys.spotify).find(song),
  "movie-this": movie => new Movie(keys.omdb).find(movie),
  "do-what-it-says": cmd => new Script().execute(cmd)
};

const [, , cmd, ...arg] = process.argv;

if (typeof cmds[cmd] === "function") {
  cmds[cmd](arg.join(" "))
    .then(console.log)
    .catch(console.error);
} else {
  console.log("");
  console.log("LIRI (Language Interpretation and Recognition Interface)");
  console.log("");
  console.log("Usage: liri <command> [text ...]");
  console.log("");
  console.log("Available Command:");
  console.log("");
  console.log("  " + Object.keys(cmds).join("\n  "));
  console.log("");
}
