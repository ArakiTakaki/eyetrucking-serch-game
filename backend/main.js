"use strict"
const express = require("express");
const Middleware = require("./middleware");
const Routes = require("./routes/api");
var app = express();
Middleware(app);
Routes(app);
app.listen(3000);
