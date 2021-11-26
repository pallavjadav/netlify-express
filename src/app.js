const express = require("express");
const serverless = require("serverless-http");
const routes = require('../routes/routes');
const app = express();
const router = express.Router();
routes(router);

app.use('/.netlify/functions/app',router);
module.exports.handler = serverless(app);