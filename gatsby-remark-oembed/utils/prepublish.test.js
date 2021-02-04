const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const prepublish = require("./prepublish");
const fs = require("fs");

const mock = new MockAdapter(axios);

jest.mock("fs");

describe("prepublish", () => {
  const response = { providers: [] };
  const url = "https://oembed.com/providers.json";

  afterEach(() => {
    mock.reset();
  });

  test("throws when fetching fails", (done) => {
    mock.onGet(url).reply(500);
    prepublish().catch(() => done());
  });

  test("writes data to file when fetching succeeds", (done) => {
    mock.onGet(url).reply(200, response);
    prepublish().then(() => {
      expect(fs.writeFileSync).toHaveBeenCalledWith(
        ".prefetched-providers.json",
        JSON.stringify(response)
      );
      done();
    });
  });
});
