"use strict"
const express = require("express");
const registerMiddleware = require("./middleware");
const registerRoutes = require("./routes/api");
var app = express();
registerMiddleware(app);
registerRoutes(app);
app.listen(3000);
