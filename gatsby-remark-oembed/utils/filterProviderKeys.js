const filterFunc = (key, filter, exclude) => {
  if (!filter) return true;

  const filterIncludes = filter.includes(key);
  return exclude ? !filterIncludes : filterIncludes;
};

const filterProviderKeys = (keys, filter) => {
  if (!filter) return keys;

  return keys
    .filter((key) => filterFunc(key, filter.include))
    .filter((key) => filterFunc(key, filter.exclude, true));
};

module.exports = filterProviderKeys;
