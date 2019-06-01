const keys = require("../keys");
const Concert = require("../Concert");

describe("Concert", () => {
  let concert;

  beforeEach(() => {
    concert = new Concert(keys.bandsintown);
  });

  it("should instantiate without errors", () => {
    expect(concert).toEqual(expect.any(Concert));
  });

  it("should find some events", () => {
    expect(concert.find("Journey")).resolves.toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          venue: expect.any(String),
          location: expect.any(String),
          date: expect.stringMatching(/^\d\d\/\d\d\/\d\d\d\d$/)
        })
      ])
    );
  });
});
