const select = require("unist-util-select");
const axios = require("axios");

const OEMBED_PROVIDERS_URL = "https://oembed.com/providers.json";

exports.fetchOembedProviders = async () => {
  const response = await axios.get(OEMBED_PROVIDERS_URL);
  return response.data;
};

exports.getProviderEndpointUrlForLinkUrl = (linkUrl, providers) => {
  let endpointUrl = false;

  for (provider of providers) {
    const endpoints = provider.endpoints || [];
    for (endpoint of endpoints) {
      const schemes = endpoint.schemes || [];

      for (schema of schemes) {
        try {
          const regExp = new RegExp(schema.replace("*", ".*"));
          if (regExp.test(linkUrl)) {
            endpointUrl = endpoint.url;
          }
        } catch (error) {
          console.log(
            "Regex problem with provider",
            provider.provider_name,
            schema,
            error.message
          );
        }
      }
    }
  }

  if (!endpointUrl) {
    console.log("No enpoint url for", linkUrl);
  }

  return endpointUrl;
};

exports.fetchOembed = async (linkUrl, endpointUrl) => {
  const response = await axios.get(endpointUrl, {
    params: {
      format: "json",
      url: linkUrl
    }
  });
  return response.data;
};

exports.selectPossibleOembedLinkNodes = markdownAST => {
  return select(markdownAST, "paragraph link:only-child");
};

exports.tranformsLinkNodeToOembedNode = (node, oembedResult) => {
  node.type = "html";
  node.value = oembedResult.html;
  return node;
};
