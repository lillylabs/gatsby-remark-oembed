const logResults = require("./logResults");

describe("#logResults", () => {
  const results1 = [undefined, new Error("Test Error"), {}, {}, undefined, {}];
  const reporter1 = {
    info: jest.fn(),
    error: jest.fn(),
  };
  const results2 = [{}, {}];
  const reporter2 = {
    info: jest.fn(),
    error: jest.fn(),
  };
  logResults(results1, { id: "markdownNode1" }, reporter1);
  logResults(results2, { id: "markdownNode2" }, reporter2);

  test("Calls reporter.info correctly", () => {
    expect(reporter1.info.mock.calls.length).toBe(1);
    expect(reporter1.info.mock.calls[0][0]).toContain("Successful embeds: 3");
    expect(reporter1.info.mock.calls[0][0]).toContain("Failed embeds: 1");
    expect(reporter1.info.mock.calls[0][0]).toContain(
      "Links with no matching provider: 2"
    );
    expect(reporter1.info.mock.calls[0][0]).toContain("Node: markdownNode1");

    expect(reporter2.info.mock.calls.length).toBe(1);
    expect(reporter2.info.mock.calls[0][0]).toContain("Successful embeds: 2");
    expect(reporter2.info.mock.calls[0][0]).not.toContain("Failed");
    expect(reporter2.info.mock.calls[0][0]).not.toContain(
      "Links with no matching provider"
    );
    expect(reporter2.info.mock.calls[0][0]).toContain("Node: markdownNode2");
  });

  test("Calls reporter.error correctly", () => {
    expect(reporter1.error.mock.calls.length).toBe(1);
    expect(reporter1.error.mock.calls[0][0]).toContain("Test Error");
  });
});
