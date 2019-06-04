const keys = require("../keys");
const Spotify = require("../Spotify");

describe("Spotify", () => {
  let spotify;

  beforeEach(() => {
    spotify = new Spotify(keys.bandsintown);
  });

  it("should instantiate without errors", () => {
    expect(spotify).toEqual(expect.any(Spotify));
  });

  it("should find some tracks if a song is give", () =>
    expect(spotify.find("Eat It")).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          artist: expect.any(String),
          songTitle: expect.any(String),
          albumTitle: expect.any(String),
          previewUrl: expect.any(String)
        })
      ])
    ));
});
