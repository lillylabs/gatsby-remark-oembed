const React = require("react");
const { amendOptions, filterProviderKeys } = require("./utils");

const SCRIPTS = {
  Twitter: "https://platform.twitter.com/widgets.js",
  Instagram: "https://www.instagram.com/embed.js",
  Flickr: "https://embedr.flickr.com/assets/client-code.js",
  Reddit: "https://embed.redditmedia.com/widgets/platform.js",
};

const createScriptTag = (key, scriptSrc) => {
  return React.createElement(
    "script",
    { src: scriptSrc, key: `gatsby-plugin-oembed-${key.toLowerCase()}` },
    null
  );
};

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  options = amendOptions(options);

  const scriptKeys = filterProviderKeys(
    Object.keys(SCRIPTS),
    options.providers
  );

  const scripts = scriptKeys.map((key) => createScriptTag(key, SCRIPTS[key]));
  setPostBodyComponents(scripts);
};
