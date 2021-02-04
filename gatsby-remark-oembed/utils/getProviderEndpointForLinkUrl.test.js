const getProviderEndpointForLinkUrl = require("./getProviderEndpointForLinkUrl");
const PROVIDERS = require("./.test/providers");

describe("#getProviderEndpointForLinkUrl", () => {
  test("only urls matching one of the providers schemes return a valid endpoint", () => {
    expect(
      getProviderEndpointForLinkUrl(
        "https://www.youtube.com/watch?v=b2H7fWhQcdE",
        PROVIDERS
      )
    ).toEqual({});
    expect(
      getProviderEndpointForLinkUrl(
        "https://www.instagram.com/p/BftIg_OFPFX/",
        PROVIDERS
      )
    ).toEqual({
      url: "https://api.instagram.com/oembed",
      params: {
        url: "https://www.instagram.com/p/BftIg_OFPFX/",
        access_token: "valid_token",
      },
    });

    expect(
      getProviderEndpointForLinkUrl(
        "https://www.instagram.com/p/BftIg_OFPFX/",
        []
      )
    ).toEqual({});
  });

  describe("Instagram special need for an access token", () => {
    const NO_INSTA_TOKEN_PROVIDERS = [
      {
        provider_name: "Instagram",
        provider_url: "https://instagram.com",
        endpoints: [
          {
            schemes: ["https://www.instagram.com/p/*"],
            url: "https://api.instagram.com/oembed",
            formats: ["json"],
          },
        ],
      },
    ];

    test("throw error when Instagram link and no access_token", () => {
      expect(() =>
        getProviderEndpointForLinkUrl(
          "https://www.instagram.com/p/BftIg_OFPFX/",
          NO_INSTA_TOKEN_PROVIDERS
        )
      ).toThrowError(
        "Instagram require you to configure an access_token. For more information, visit https://developers.facebook.com/docs/instagram/oembed/."
      );
    });

    test("do not throw error when no Instagram link and no access_token", () => {
      expect(
        getProviderEndpointForLinkUrl(
          "https://www.example.com/post",
          NO_INSTA_TOKEN_PROVIDERS
        )
      ).toEqual({});
    });
  });

  test("Empty providers and/or link: is accepted", () => {
    expect(getProviderEndpointForLinkUrl()).toEqual({});
  });
});
