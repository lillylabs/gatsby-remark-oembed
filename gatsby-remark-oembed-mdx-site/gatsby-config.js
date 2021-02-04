require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "gatsby-remark-oembed plugin MDX example site",
    author: "raae.codes",
    description:
      "A site demonstrating the gatsby-remark-oembed plugin used with gatsby-plugin-mdx",
    siteUrl: "https://gatsby-remark-oembed-mdx.netlify.com/",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../example-content/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                settings: {
                  Twitter: {
                    theme: "light", // Use the Twitter light theme
                  },
                  Instagram: {
                    hidecaption: false,
                    access_token: process.env.INSTAGRAM_ACCESS_TOKEN,
                  },
                  test: "testing",
                },
              },
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography",
      },
    },
  ],
};
