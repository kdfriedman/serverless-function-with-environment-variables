# serverless-function-with-environment-variables

Retrieve sensitive environment variables from serverless functions. Here is an example of storing a static firebase application's project config object as a group of environment variables which are fetched `onLoad`.

Using Netlify serverless functions, simply add the environment variables into the Netlify dashboard which hosts your serverless functions. Make your function more secure by controlling the access headers server side, allowing only specific http methods and origins from loading data.
