import React from "react";
import { Link } from "gatsby";

import { rhythm, scale } from "../utils/typography";

import Bio from "./Bio";

const PageLayout = ({ children, title }) => {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: "none",
            textDecoration: "none",
            color: "inherit",
          }}
          to={"/"}
        >
          {title}
        </Link>
      </h1>
      <Bio />
      {children}
    </div>
  );
};

export default PageLayout;
