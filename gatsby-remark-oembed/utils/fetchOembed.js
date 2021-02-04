const axios = require("axios");

const fetchOembed = async (endpoint) => {
  const response = await axios.get(endpoint.url, {
    params: {
      format: "json",
      ...endpoint.params,
    },
  });
  return response.data;
};

module.exports = fetchOembed;
