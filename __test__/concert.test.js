const keys = require("../keys");
const Concert = require("../Concert");

describe("Concert", () => {
  let concert;

  beforeEach(() => {
    concert = new Concert(keys.concert);
  });

  it("instantiates without errors", () => {
    expect(concert).toEqual(expect.any(Concert));
  });

  it("can find a concert", () => {
    expect(concert.find("Journey")).toEqual(expect.anything());
  });
});
