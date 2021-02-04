const { defaultsDeep } = require("lodash");

const DEFAULT_USE_PREFIX = ["oembed"];

const DEFAULT_OPTIONS = {
  usePrefix: false,
};

const amendOptions = (options) => {
  if (options.usePrefix && !Array.isArray(options.usePrefix)) {
    // usePrefix: true
    options.usePrefix = DEFAULT_USE_PREFIX;
  }

  return defaultsDeep({}, options, DEFAULT_OPTIONS);
};

module.exports = amendOptions;
