import React from "react";
import { Link } from "gatsby";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "./profile-pic.jpg";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          marginBottom: rhythm(2.5),
          alignItems: "center",
        }}
      >
        <img
          src={profilePic}
          alt={`Benedicte Raae`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            flexShrink: 0,
          }}
        />
        <div>
          <p
            style={{
              marginBottom: rhythm(0.4),
            }}
          >
            Example site for the{" "}
            <a href="https://www.npmjs.com/package/@raae/gatsby-remark-oembed">
              gatsby-remark-oembed plugin
            </a>{" "}
            with markdown content.
          </p>
          <p
            style={{
              marginBottom: 0,
            }}
          >
            Created by @raae: <a href="https://twitter.com/raae">Twitter</a>,{" "}
            <a href="https://instagram.com/raae.codes">Instagram</a> or{" "}
            <a href="https://raae.codes">raae.codes</a>.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
