exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ CLIENT_ID: "client_id_test" }),
  };
};
