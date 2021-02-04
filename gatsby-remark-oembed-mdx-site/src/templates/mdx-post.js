import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Bio from "../components/Bio";
import Layout from "../components/PostLayout";
import { rhythm } from "../utils/typography";

const MdxPostTemplate = ({ data, pageContext }) => {
  const post = data.mdx;

  return (
    <Layout {...pageContext}>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  );
};

export default MdxPostTemplate;

export const pageQuery = graphql`
  query MdxPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
