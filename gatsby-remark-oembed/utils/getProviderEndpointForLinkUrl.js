const getProviderEndpointForLinkUrl = (linkUrl, providers) => {
  let transformedEndpoint = {};

  for (const provider of providers || []) {
    for (const endpoint of provider.endpoints || []) {
      const isInstagram = provider.provider_name === "Instagram";
      const hasAccessToken = provider.params && provider.params.access_token;

      for (let schema of endpoint.schemes || []) {
        schema = schema.replace("*", ".*");
        const regExp = new RegExp(schema);
        const isMatchingSchema = regExp.test(linkUrl);

        if (isMatchingSchema && isInstagram && !hasAccessToken) {
          throw new Error(
            "Instagram require you to configure an access_token. For more information, visit https://developers.facebook.com/docs/instagram/oembed/."
          );
        } else if (isMatchingSchema) {
          transformedEndpoint.url = endpoint.url;
          transformedEndpoint.params = {
            url: linkUrl,
            ...provider.params,
          };
        }
      }
    }
  }

  return transformedEndpoint;
};

module.exports = getProviderEndpointForLinkUrl;
