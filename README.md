# liri-node-app

LIRI (Language Interpretation and Recognition Interface)

This is a simple app that takes command line arguments to hit various APIs. In order to access these APIs an enviroment file needs to be created in the root folder of the project. The file needs to be named `.env` and contain the following keys

```
# Bands In This Town

BANDSINTOWN_URL = https://rest.bandsintown.com
BANDSINTOWN_ID  = <id>

# Spotify API keys

SPOTIFY_ID     = <id>
SPOTIFY_SECRET = <secret>

# OMDB

OMDB_URL = https://www.omdbapi.com
OMDB_KEY = <key>
```

keys can be obtained from the following urls:

- Bands In Town: https://manager.bandsintown.com/support/bandsintown-api
- Spotify: https://developer.spotify.com/documentation/web-api/quick-start/
- OMDB: https://www.omdbapi.com/apikey.aspx

## Usage

```
LIRI (Language Interpretation and Recognition Interface)

Usage: liri <command> [text ...]

Available Command:

  concert-this <artist>
  spotify-this-song <song>
  movie-this <movie>
  do-what-it-says
```
