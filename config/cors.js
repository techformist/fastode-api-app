module.exports = {
  properties: {
    // TODO: many are for future use
    // filter this.
    //
    /*
    |
    | ORIGIN
    |
    | Specify which external hosts can send requests to this server.
    | Values can be one of following options -
    |
    | Boolean:
    |   `true`: Reflect the request origin
    |   `false`: disable CORS.
    |
    | String: set origin to a specific origin
    |   `http://example.com`: Only requests from "http://example.com" will be allowed
    | 
    | Can also be a regular expression or a function. Refer https://github.com/expressjs/cors.
    */
    origin: { type: "boolean", default: true },

    /*
    |
    | METHODS
    |
    | Specify which HTTP methods are allowed. 
    | The value can be a comma separated string or array.
    |
    */
    methods: {
      type: "array",
      default: ["GET", "PUT", "PATCH", "POST", "DELETE"]
    },

    /*
    |
    | ALLOWED HEADERS
    |
    | Expects a comma-delimited string (ex: 'Content-Type,Authorization') 
    | or an array (ex: ['Content-Type', 'Authorization']). 
    | If not specified, defaults to reflecting the headers specified in 
    | the request's Access-Control-Request-Headers header.
    |
    */
    //allowedHeaders: {type: "array", default: ['Content-Type', 'Authorization']},

    /*
    |
    | EXPOSED HEADERS
    |
    | Expects a comma-delimited string (ex: 'Content-Type,Authorization') 
    | or an array (ex: ['Content-Type', 'Authorization']). 
    | If not specified, defaults to reflecting the headers specified in 
    | the request's Access-Control-Request-Headers header.
    |
    */
    // exposedHeaders: {type: "array", default:['Content-Range', 'X-Content-Range']},

    /*
    |
    | CREDENTIALS
    |
    | Define Access-Control-Allow-Credentials header. Specify Boolean value.
    |
    */
    // credentials: {type: "boolean", default:false},

    /*
    |
    | MAX AGE
    |
    | Configures the Access-Control-Max-Age CORS header. 
    | Set to an integer to pass the header, otherwise it is omitted
    |
    */
    maxAge: { type: "number", default: 90 },

    /*
    | PREFLIGHT DISABLE
    |
    | Disable preflight checks.
    |
    */
    preflight: { type: "boolean", default: true }
  }
};
