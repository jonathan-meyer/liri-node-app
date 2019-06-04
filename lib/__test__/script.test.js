const Script = require("../Script");

describe("Script", () => {
  let script;

  beforeEach(() => {
    script = new Script();
  });

  it("should instantiate without errors", () => {
    expect(script).toEqual(expect.any(Script));
  });

  it("run commands from a file", () =>
    expect(script.execute()).resolves.toEqual(
      expect.objectContaining({
        code: 0,
        error: null,
        stderr: "",
        stdout: expect.any(String)
      })
    ));
});
