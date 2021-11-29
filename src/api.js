const express = require("express");
const serverless = require("serverless-http");
const routes = require('../routes/routes');
const app = express();
const router = express.Router();
routes(router);

app.use(`/.netlify/functions/api`,router);

module.exports = app;
module.exports.handler = serverless(app);
