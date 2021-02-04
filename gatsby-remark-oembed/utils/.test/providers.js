module.exports = [
  {
    provider_name: "Instagram",
    provider_url: "https://instagram.com",
    params: {
      access_token: "valid_token",
    },
    endpoints: [
      {
        schemes: [
          "http://instagram.com/p/*",
          "http://instagr.am/p/*",
          "http://www.instagram.com/p/*",
          "http://www.instagr.am/p/*",
          "https://instagram.com/p/*",
          "https://instagr.am/p/*",
          "https://www.instagram.com/p/*",
          "https://www.instagr.am/p/*",
        ],
        url: "https://api.instagram.com/oembed",
        formats: ["json"],
      },
    ],
  },
  {
    provider_name: "Twitter",
    provider_url: "http://www.twitter.com/",
    endpoints: [
      {
        schemes: [
          "https://twitter.com/*/status/*",
          "https://*.twitter.com/*/status/*",
        ],
        url: "https://publish.twitter.com/oembed",
      },
    ],
  },
  {
    provider_name: "Vimeo",
    provider_url: "https://vimeo.com/",
    endpoints: [
      {
        schemes: [
          "https://vimeo.com/*",
          "https://vimeo.com/album/*/video/*",
          "https://vimeo.com/channels/*/*",
          "https://vimeo.com/groups/*/videos/*",
          "https://vimeo.com/ondemand/*/*",
          "https://player.vimeo.com/video/*",
        ],
        url: "https://vimeo.com/api/oembed.{format}",
        discovery: true,
      },
    ],
  },
  {
    provider_name: "Test1",
    provider_url: "http://www.test1.com/",
    endpoints: [
      {
        schemes: ["https://test1.com/*"],
        url: "https://test1.com/oembed",
      },
    ],
  },
  {
    provider_name: "Test3",
    provider_url: "http://www.test3.com/",
    endpoints: [
      {
        schemes: ["https://test3.com/*"],
        url: "https://test3.com/oembed",
      },
    ],
  },
  {
    provider_name: "Test4",
  },
  {
    provider_name: "Test4",
    endpoints: [{}],
  },
];
