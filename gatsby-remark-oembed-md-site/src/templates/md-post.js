import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/PostLayout";
import { rhythm } from "../utils/typography";

const MdPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  return (
    <Layout {...pageContext}>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
    </Layout>
  );
};

export default MdPostTemplate;

export const pageQuery = graphql`
  query MdPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
