const express = require("express");
const r = express.Router();
const fallback = require("express-history-api-fallback");

r.get("/test", require("../controller/test"));
r.get("/api", require("../controller/sampleAPI"));

// fallback and static
r.use(express.static("public"));
r.use(fallback("index.html", { root: "public" }));

module.exports = r;
