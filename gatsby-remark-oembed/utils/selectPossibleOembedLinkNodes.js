const select = require("unist-util-select");

const selectPossibleOembedLinkNodes = (markdownAST, usePrefix = false) => {
  if (!usePrefix) {
    return select(markdownAST, "paragraph link:only-child");
  } else {
    const inlineCodeNodes = select(markdownAST, "inlineCode");
    const selectedNodes = [];

    inlineCodeNodes.forEach((inlineCodeNode) => {
      const [prefix, ...rest] = inlineCodeNode.value.split(":");
      if (usePrefix.includes(prefix.trim())) {
        inlineCodeNode.url = rest.join(":").trim();
        selectedNodes.push(inlineCodeNode);
      }
    });

    return selectedNodes;
  }
};

module.exports = selectPossibleOembedLinkNodes;
