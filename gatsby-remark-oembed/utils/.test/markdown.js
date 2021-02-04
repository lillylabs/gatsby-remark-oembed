// link - youtube
// inlineCode with "oembed: " prefix - twitter
// inlineCode with without prefix - instagram
// inlineCode with "video:" - twitch

module.exports = {
  type: "root",
  children: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Take a look at a day in my life as a web developer.",
          position: {
            start: { line: 2, column: 1, offset: 1 },
            end: { line: 2, column: 52, offset: 52 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 2, column: 1, offset: 1 },
        end: { line: 2, column: 52, offset: 52 },
        indent: [],
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "link",
          title: null,
          url: "http://www.youtube.com/watch?v=iwGFalTRHDA",
          children: [
            {
              type: "text",
              value: "http://www.youtube.com/watch?v=iwGFalTRHDA",
              position: {
                start: { line: 4, column: 1, offset: 54 },
                end: { line: 4, column: 40, offset: 93 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 4, column: 1, offset: 54 },
            end: { line: 4, column: 40, offset: 93 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 4, column: 1, offset: 54 },
        end: { line: 4, column: 40, offset: 93 },
        indent: [],
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Follow me for more code fun at ",
          position: {
            start: { line: 6, column: 1, offset: 95 },
            end: { line: 6, column: 32, offset: 126 },
            indent: [],
          },
        },
        {
          type: "link",
          title: null,
          url: "https://raae.codes",
          children: [
            {
              type: "text",
              value: "raae.codes",
              position: {
                start: { line: 6, column: 33, offset: 127 },
                end: { line: 6, column: 43, offset: 137 },
                indent: [],
              },
            },
          ],
          position: {
            start: { line: 6, column: 32, offset: 126 },
            end: { line: 6, column: 64, offset: 158 },
            indent: [],
          },
        },
        {
          type: "text",
          value: ".",
          position: {
            start: { line: 6, column: 64, offset: 158 },
            end: { line: 6, column: 65, offset: 159 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 6, column: 1, offset: 95 },
        end: { line: 6, column: 65, offset: 159 },
        indent: [],
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "inlineCode",
          value: "oembed: https://twitter.com/raae/status/1045394833001652225",
          position: {
            start: { line: 8, column: 1, offset: 161 },
            end: { line: 8, column: 62, offset: 222 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 8, column: 1, offset: 161 },
        end: { line: 8, column: 62, offset: 222 },
        indent: [],
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "inlineCode",
          value: "https://www.instagram.com/p/Bof9WhgBmY2",
          position: {
            start: { line: 8, column: 1, offset: 161 },
            end: { line: 8, column: 62, offset: 222 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 8, column: 1, offset: 161 },
        end: { line: 8, column: 62, offset: 222 },
        indent: [],
      },
    },
    {
      type: "paragraph",
      children: [
        {
          type: "inlineCode",
          value: "video:https://www.twitch.tv/videos/72749628",
          position: {
            start: { line: 10, column: 1, offset: 224 },
            end: { line: 10, column: 49, offset: 272 },
            indent: [],
          },
        },
      ],
      position: {
        start: { line: 10, column: 1, offset: 224 },
        end: { line: 10, column: 49, offset: 272 },
        indent: [],
      },
    },
  ],
  position: {
    start: { line: 1, column: 1, offset: 0 },
    end: { line: 11, column: 1, offset: 273 },
  },
};
