const {
  selectPossibleOembedLinks,
  tranformsLinkNodeToOembedNode
} = require("./helpers");

describe("#selectPossibleOembedLinks", () => {
  test("select only links that are the only child of a paragraph", () => {
    const possibleOembedLinks = selectPossibleOembedLinks(markdownAST);
    expect(possibleOembedLinks).toHaveLength(1);
    expect(possibleOembedLinks[0]).toMatchObject({
      type: "link",
      url: "https://www.youtube.com/watch?v=b2H7fWhQcdE"
    });
  });
});

describe("#tranformsLinkNodeToOembedNode", () => {
  const originalNode = {
    type: "link"
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
    width: 480
  });

  test("change node type to html", () => {
    expect(transformedNode.type).toBe("html");
  });

  test("set value to omebed result html", () => {
    expect(transformedNode.value).toBe(
      '<iframe width="480" height="270" src="https://www.youtube.com/embed/b2H7fWhQcdE?feature=oembed" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    );
  });
});

const markdownAST = {
  children: [
    {
      position: {
        end: {
          column: 4,
          line: 4,
          offset: 62
        },
        indent: [1, 1, 1],
        start: {
          column: 1,
          line: 1,
          offset: 0
        }
      },
      type: "yaml",
      value: 'title: New Beginnings\ndate: "2015-05-28T22:40:32.169Z"'
    },
    {
      children: [
        {
          children: [
            {
              position: {
                end: {
                  column: 44,
                  line: 6,
                  offset: 107
                },
                indent: [],
                start: {
                  column: 1,
                  line: 6,
                  offset: 64
                }
              },
              type: "text",
              value: "https://www.youtube.com/watch?v=b2H7fWhQcdE"
            }
          ],
          position: {
            end: {
              column: 44,
              line: 6,
              offset: 107
            },
            indent: [],
            start: {
              column: 1,
              line: 6,
              offset: 64
            }
          },
          title: null,
          type: "link",
          url: "https://www.youtube.com/watch?v=b2H7fWhQcdE"
        }
      ],
      position: {
        end: {
          column: 44,
          line: 6,
          offset: 107
        },
        indent: [],
        start: {
          column: 1,
          line: 6,
          offset: 64
        }
      },
      type: "paragraph"
    },
    {
      children: [
        {
          position: {
            end: {
              column: 29,
              line: 9,
              offset: 213
            },
            indent: [1],
            start: {
              column: 1,
              line: 8,
              offset: 109
            }
          },
          type: "text",
          value:
            "Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the "
        },
        {
          children: [
            {
              position: {
                end: {
                  column: 41,
                  line: 9,
                  offset: 225
                },
                indent: [],
                start: {
                  column: 30,
                  line: 9,
                  offset: 214
                }
              },
              type: "text",
              value: "blind texts"
            }
          ],
          position: {
            end: {
              column: 62,
              line: 9,
              offset: 246
            },
            indent: [],
            start: {
              column: 29,
              line: 9,
              offset: 213
            }
          },
          title: null,
          type: "link",
          url: "http://example.com"
        },
        {
          position: {
            end: {
              column: 102,
              line: 9,
              offset: 286
            },
            indent: [],
            start: {
              column: 62,
              line: 9,
              offset: 246
            }
          },
          type: "text",
          value: ". Separated they live in Bookmarksgrove."
        }
      ],
      position: {
        end: {
          column: 102,
          line: 9,
          offset: 286
        },
        indent: [1],
        start: {
          column: 1,
          line: 8,
          offset: 109
        }
      },
      type: "paragraph"
    }
  ],
  position: {
    end: {
      column: 1,
      line: 10,
      offset: 287
    },
    start: {
      column: 1,
      line: 1,
      offset: 0
    }
  },
  type: "root"
};
