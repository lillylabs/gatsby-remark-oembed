const filterFunc = (provider, filter, exclude) => {
  if (!filter) return true;

  const filterIncludes = filter.includes(provider.provider_name);
  return exclude === true ? !filterIncludes : filterIncludes;
};

const filterProviders = (providers, listConfig) => {
  if (!listConfig) return providers;

  return providers
    .filter((provider) => filterFunc(provider, listConfig.include))
    .filter((provider) => filterFunc(provider, listConfig.exclude, true));
};

module.exports = filterProviders;
