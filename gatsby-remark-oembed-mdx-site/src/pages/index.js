import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import Layout from "../components/PageLayout";

const BlogMdxIndex = ({ data, pageContext, location }) => {
  const posts = data.allMdx.edges;

  return (
    <Layout title="gatsby-remark-oembed MDX example">
      {posts.map(({ node }) => {
        return (
          <article key={node.fields.slug}>
            <h1>
              <Link
                style={{
                  boxShadow: "none",
                }}
                to={node.fields.slug}
              >
                {node.frontmatter.title}
              </Link>
            </h1>
            <MDXRenderer>{node.body}</MDXRenderer>
          </article>
        );
      })}
    </Layout>
  );
};

export default BlogMdxIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          body
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
