const filterProviderKeys = require("./filterProviderKeys");

describe("#filterProviderKeys", () => {
  const providers = ["Kickstarter", "Twitter", "Instagram"];

  test("do nothing to the list of providers", () => {
    expect(filterProviderKeys(providers, undefined)).toEqual(providers);
    expect(filterProviderKeys(providers, {})).toEqual(providers);
  });

  test("returns a list of providers with only Instagram", () => {
    const filteredProviders = filterProviderKeys(providers, {
      include: ["Instagram", "Twitter"],
      exclude: ["Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining(["Instagram"]),
      expect.not.arrayContaining(["Kickstarter", "Twitter"])
    );
  });

  test("returns a list of providers with only Instagram and Twitter", () => {
    const filteredProviders = filterProviderKeys(providers, {
      include: ["Instagram", "Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining(["Instagram", "Twitter"]),
      expect.not.arrayContaining(["Kickstarter"])
    );
  });

  test("returns a list of providers without Instagram and Twitter, ie. only Kickstarter", () => {
    const filteredProviders = filterProviderKeys(providers, {
      exclude: ["Instagram", "Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining(["Kickstarter"]),
      expect.not.arrayContaining(["Instagram", "Twitter"])
    );
  });
});
