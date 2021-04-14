require("dotenv").config();
const { CLIENT_ID } = process.env;

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ CLIENT_ID }),
  };
};
