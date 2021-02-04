const selectPossibleOembedLinkNodes = require("./selectPossibleOembedLinkNodes");
const MARKDOWN_AST = require("./.test/markdown");

// link - youtube
// inlineCode with "oembed: " prefix - twitter
// inlineCode with without prefix - instagram
// inlineCode with "video" - twitch

describe("#selectPossibleOembedLinkNodes", () => {
  test("select only links that are the only child of a paragraph", () => {
    const possibleOembedLinks = selectPossibleOembedLinkNodes(MARKDOWN_AST);
    expect(possibleOembedLinks).toHaveLength(1);
    expect(possibleOembedLinks[0]).toMatchObject({
      type: "link",
      url: "http://www.youtube.com/watch?v=iwGFalTRHDA",
    });
  });

  test("select only links that inline code and prefixed with 'oembed:'", () => {
    const possibleOembedLinks = selectPossibleOembedLinkNodes(MARKDOWN_AST, [
      "oembed",
    ]);
    expect(possibleOembedLinks).toHaveLength(1);
    // allow space after 'oembed:'
    expect(possibleOembedLinks[0]).toMatchObject({
      type: "inlineCode",
      url: "https://twitter.com/raae/status/1045394833001652225",
    });
  });

  test("select only links that inline code and prefixed with 'video:'", () => {
    const possibleOembedLinks = selectPossibleOembedLinkNodes(MARKDOWN_AST, [
      "video",
    ]);
    expect(possibleOembedLinks).toHaveLength(1);
    expect(possibleOembedLinks[0]).toMatchObject({
      type: "inlineCode",
      url: "https://www.twitch.tv/videos/72749628",
    });
  });

  test("select only links that inline code and prefixed with 'oembed:' or 'video:'", () => {
    const possibleOembedLinks = selectPossibleOembedLinkNodes(MARKDOWN_AST, [
      "oembed",
      "video",
    ]);
    expect(possibleOembedLinks).toHaveLength(2);
    // allow space after 'oembed:'
    expect(possibleOembedLinks[0]).toMatchObject({
      type: "inlineCode",
      url: "https://twitter.com/raae/status/1045394833001652225",
    });
    expect(possibleOembedLinks[1]).toMatchObject({
      type: "inlineCode",
      url: "https://www.twitch.tv/videos/72749628",
    });
  });
});
