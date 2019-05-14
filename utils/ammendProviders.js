const ammendEndpointUrl = (url = "", forceHttps) => {
  url = url.replace("{format}", "json");
  if (forceHttps) {
    url = url.replace("http", "https");
  }
  return url;
};

const ammendSchemes = (schemes = [], { addHttps }) => {
  if (addHttps) {
    const httpsSchemes = [...schemes].map(scheme =>
      scheme.replace("http", "https")
    );
    schemes = schemes.concat(httpsSchemes);
  }
  return schemes;
};

const ammendEndpoint = (endpoint, { addHttpsToSchemes, forceHttpsInUrl }) => {
  return {
    ...endpoint,
    schemes: ammendSchemes(endpoint.schemes, { addHttps: addHttpsToSchemes }),
    url: ammendEndpointUrl(endpoint.url, forceHttpsInUrl)
  };
};

const ammendParams = (params = {}, settingsParams) => {
  return {
    ...params,
    ...settingsParams
  };
};

const ammendProvider = (provider, settings = {}, providerKey) => {
  const endpoints = [
    ...(provider.endpoints || []),
    ...(settings.endpoints || [])
  ];
  const ammendedEndpoints = endpoints.map(endpoint =>
    ammendEndpoint(endpoint, {
      addHttpsToSchemes: settings.addHttpsToEndpointsSchemes,
      forceHttpsInUrl: settings.forceHttpsInEndpointUrl
    })
  );

  const settingsParams = { ...settings };

  // Delete params that should not be used as params for the provider
  delete settingsParams.endpoints;
  delete settingsParams.addHttpsToEndpointsSchemes;
  delete settingsParams.forceHttpsInEndpointUrl;

  return {
    ...provider,
    provider_name: providerKey ? providerKey : provider.provider_name,
    endpoints: ammendedEndpoints,
    params: ammendParams(provider.params, settingsParams)
  };
};

const ammendProviders = (providers = [], settings = {}) => {
  const ammendedProviders = providers.map(provider => {
    return ammendProvider(provider, settings[provider.provider_name]);
  });
  Object.keys(settings).forEach(providerKey => {
    ammendedProviders.push(
      ammendProvider({}, settings[providerKey], providerKey)
    );
  });
  return ammendedProviders;
};

module.exports = ammendProviders;
