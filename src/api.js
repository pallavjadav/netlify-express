const express = require("express");
const serverless = require("serverless-http");
const routes = require('../routes/routes');
const app = express();
const router = express.Router();
routes(router);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// comment from pallav
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(`/.netlify/functions/api`,router);
app.use(express.static('../HTML'));

module.exports = app;
module.exports.handler = serverless(app);
