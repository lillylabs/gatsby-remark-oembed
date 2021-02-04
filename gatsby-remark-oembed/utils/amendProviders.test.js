const amendProviders = require("./amendProviders");
const PROVIDERS = require("./.test/providers");

describe("#amendProviders", () => {
  const providerSettings = {
    Twitter: {
      theme: "dark",
    },
    Instagram: {
      hidecaption: true,
      omitscript: true,
    },
    Test1: {
      param1: "param1",
      endpoints: [
        {
          schemes: ["https://test1.no/*"],
        },
      ],
    },
    Test2: {
      param2: "param2",
      endpoints: [
        {
          schemes: ["https://test2.com/*"],
          url: "https://test2.com/oembed",
        },
      ],
    },
  };

  const amendedProviders = amendProviders(PROVIDERS, providerSettings);

  const amendedTwitter = amendedProviders.find(
    (provider) => provider.provider_name === "Twitter"
  );

  const amendedInstagram = amendedProviders.find(
    (provider) => provider.provider_name === "Instagram"
  );

  const amendedVimeo = amendedProviders.find(
    (provider) => provider.provider_name === "Vimeo"
  );

  const amendedTest1 = amendedProviders.find(
    (provider) => provider.provider_name === "Test1"
  );

  const addedTest2 = amendedProviders.find(
    (provider) => provider.provider_name === "Test2"
  );

  const untouchedTest3 = amendedProviders.find(
    (provider) => provider.provider_name === "Test3"
  );

  test("amended providers list is expected length", () => {
    expect(amendedProviders.length).toEqual(8);
  });

  test("amended Twitter has added params", () => {
    expect(amendedTwitter.params).toEqual(providerSettings["Twitter"]);
    expect(amendedTwitter.endpoints[0].schemes[0]).toEqual(
      "https://twitter.com/*/status/*"
    );
  });

  test("amended Instagram has added params", () => {
    expect(amendedInstagram.params).toEqual(providerSettings["Instagram"]);
  });

  test("amended Vimeo has correct format", () => {
    expect(amendedVimeo.endpoints[0].url).toEqual(
      "https://vimeo.com/api/oembed.json"
    );
  });

  test("amended Test1 has changed schema and added params", () => {
    expect(amendedTest1.params).toEqual(providerSettings["Test1"]);
    expect(amendedTest1.endpoints[0].schemes[0]).toEqual("https://test1.no/*");
    expect(amendedTest1.endpoints[0].url).toEqual("https://test1.com/oembed");
  });

  test("added Test2 exists and is correct", () => {
    expect(addedTest2.params).toEqual(providerSettings["Test2"]);
    expect(addedTest2.endpoints[0].schemes[0]).toEqual("https://test2.com/*");
    expect(addedTest2.endpoints[0].url).toEqual("https://test2.com/oembed");
  });

  test("Test3 is untouched", () => {
    expect(untouchedTest3.params).toEqual({});
    expect(untouchedTest3.endpoints[0].schemes[0]).toEqual(
      "https://test3.com/*"
    );
    expect(untouchedTest3.endpoints[0].url).toEqual("https://test3.com/oembed");
  });

  test("Empty providers and/or settings is accepted", () => {
    expect(amendProviders()).toEqual([]);
  });
});
