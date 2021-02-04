const filterProviders = require("./filterProviders");

describe("#filterProviders", () => {
  const kickstarter = {
    provider_name: "Kickstarter",
  };
  const twitter = {
    provider_name: "Twitter",
  };

  const instagram = {
    provider_name: "Instagram",
  };

  const providers = [kickstarter, twitter, instagram];

  test("do nothing to the list of providers", () => {
    expect(filterProviders(providers, undefined)).toEqual(providers);
    expect(filterProviders(providers, {})).toEqual(providers);
  });

  test("returns a list of providers with only Instagram", () => {
    const filteredProviders = filterProviders(providers, {
      include: ["Instagram", "Twitter"],
      exclude: ["Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining([expect.objectContaining(instagram)]),
      expect.not.arrayContaining([kickstarter, twitter])
    );
  });

  test("returns a list of providers with only Instagram and Twitter", () => {
    const filteredProviders = filterProviders(providers, {
      include: ["Instagram", "Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining([instagram, twitter]),
      expect.not.arrayContaining([kickstarter])
    );
  });

  test("returns a list of providers without Instagram and Twitter, ie. only Kickstarter", () => {
    const filteredProviders = filterProviders(providers, {
      exclude: ["Instagram", "Twitter"],
    });

    expect(filteredProviders).toEqual(
      expect.arrayContaining([kickstarter]),
      expect.not.arrayContaining([instagram, twitter])
    );
  });
});
