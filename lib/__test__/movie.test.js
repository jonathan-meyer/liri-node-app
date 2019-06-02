const keys = require("../keys");
const Movie = require("../Movie");

describe("Movie", () => {
  let movie;

  beforeEach(() => {
    movie = new Movie(keys.omdb);
  });

  it("should instantiate without errors", () => {
    expect(movie).toEqual(expect.any(Movie));
  });

  it("should find a movie", () =>
    expect(movie.find("Princess Bride")).resolves.toEqual(
      expect.objectContaining({
        title: expect.any(String),
        year: expect.any(String)
      })
    ));
});
