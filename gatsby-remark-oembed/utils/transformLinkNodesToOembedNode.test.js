const tranformsLinkNodeToOembedNode = require("./tranformsLinkNodeToOembedNode");

describe("#tranformsLinkNodeToOembedNode", () => {
  const originalNode = {
    type: "link",
  };

  const transformedNode = tranformsLinkNodeToOembedNode(originalNode, {
    author_name: "LevelUpTuts",
    author_url: "https://www.youtube.com/user/LevelUpTuts",
    height: 270,
    html:
      '<iframe width="480" height="270" src="https://www.youtube.com/embed/b2H7fWhQcdE?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
    provider_name: "YouTube",
    provider_url: "https://www.youtube.com/",
    thumbnail_height: 360,
    thumbnail_url: "https://i.ytimg.com/vi/b2H7fWhQcdE/hqdefault.jpg",
    thumbnail_width: 480,
    title: "GatsbyJS Tutorials #1 - Getting Started with Gatsby",
    type: "video",
    version: "1.0",
    width: 480,
  });

  test("change node type to html", () => {
    expect(transformedNode.type).toBe("html");
  });

  test("set value to omebed result html", () => {
    expect(transformedNode.value).toBe(
      '<iframe loading="lazy" width="480" height="270" src="https://www.youtube.com/embed/b2H7fWhQcdE?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  });
});
