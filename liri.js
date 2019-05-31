const keys = require("./keys");

const Concert = require("./Concert");
const Spotify = require("./Spotify");
const Movie = require("./Movie");
const Script = require("./Script");

const cmds = {
  "concert-this": concert => new Concert(keys.concert).find(concert),
  "spotify-this-song": song => new Spotify(keys.spotify).find(song),
  "movie-this": movie => new Movie(keys.movie).find(movie),
  "do-what-it-says": cmd => new Script().execute(cmd)
};

const [, , cmd, ...arg] = process.argv;

if (typeof cmds[cmd] === "function") {
  console.log(cmds[cmd](arg.join(" ")));
} else {
  console.log("Error: unknown command:", cmd);
}
