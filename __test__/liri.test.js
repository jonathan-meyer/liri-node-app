const cli = require("../lib/cli");

describe("liri", () => {
  it("concert-this with band", () =>
    expect(cli(["concert-this", "Journey"], ".")).resolves.toEqual(
      expect.objectContaining({
        code: 0,
        error: null,
        stderr: "",
        stdout: expect.any(String)
      })
    ));

  it("spotify-this-song with song", () =>
    expect(cli(["spotify-this-song", "Eat It"], ".")).resolves.toEqual(
      expect.objectContaining({
        code: 0,
        error: null,
        stderr: "",
        stdout: expect.any(String)
      })
    ));

  it("movie-this with movie", () =>
    expect(cli(["movie-this", "ET"], ".")).resolves.toEqual(
      expect.objectContaining({
        code: 0,
        error: null,
        stderr: "",
        stdout: expect.any(String)
      })
    ));
});
