const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const fetchOembedProviders = require("./fetchOembedProviders");

const mock = new MockAdapter(axios);

describe("#fetchOembedProviders", () => {
  const response = { providers: [] };
  const url = "https://oembed.com/providers.json";

  afterEach(() => {
    mock.reset();
  });

  test("succeeded fetch return unaltered response.data", (done) => {
    mock.onGet(url).reply(200, response);

    fetchOembedProviders().then((result) => {
      expect(result).toMatchObject(response);
      done();
    });
  });

  test("failed fetch returns unaltered error", (done) => {
    mock.onGet(url).networkError();

    fetchOembedProviders().catch((result) => {
      expect(result).toMatchObject(new Error("Network Error"));
      done();
    });
  });
});
