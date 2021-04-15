//initialize dotenv library for env variable usage within dev
require("dotenv").config();
// firebase config object
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = process.env;

// function handler which is netlify uses to pass in two arguments - event + context
exports.handler = async (event, context) => {
  // initial request made automatically by browser
  switch (event.httpMethod) {
    case "OPTIONS": {
      console.log(`inside ${event.httpMethod} case`);
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": process.env.ORIGIN,
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
          "Access-Control-Allow-Credentials": "true",
        },
      };
    }
    // get env data to send back to client
    case "POST": {
      console.log(`inside ${event.httpMethod} case`);
      return {
        statusCode: 200,
        // only allow origin, and OPTIONS + POST HTTP methods
        headers: {
          "Access-Control-Allow-Origin": process.env.ORIGIN,
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          "Content-Type": "application/json",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
          "Access-Control-Allow-Credentials": "true",
        },
        // send back env variable object
        // map identical values to netlify env variable setup in dashboard for PROD
        body: JSON.stringify({
          API_KEY,
          AUTH_DOMAIN,
          PROJECT_ID,
          STORAGE_BUCKET,
          MESSAGING_SENDER_ID,
          APP_ID,
        }),
      };
    }
    default: {
      console.log(`inside ${event.httpMethod} case`);
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  }
};
