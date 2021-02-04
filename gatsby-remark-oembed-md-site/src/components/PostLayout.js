import React from "react";
import { Link } from "gatsby";

import { rhythm } from "../utils/typography";

import Bio from "./Bio";

const PostLayout = ({ children, next, previous, slug }) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <h3
        style={{
          fontFamily: "Montserrat, sans-serif",
          marginTop: 0,
          marginBottom: rhythm(-1),
        }}
      >
        <Link
          style={{
            boxShadow: "none",
          }}
          to={"/"}
        >
          gatsby-remark-oembed example
        </Link>
      </h3>
      {children}
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          listStyle: "none",
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      <Bio />
    </div>
  );
};

export default PostLayout;
