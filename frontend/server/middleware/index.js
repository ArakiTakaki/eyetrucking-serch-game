require("dotenv").config();
const express = require("express");
const m = express.Router();

// 開発環境のみに設定するもの
console.log(process.env.MODE === "development");
if (process.env.MODE === "development") {
  m.use("/api", require("./cors"));
  m.use(require("./delay"));
  m.use(require("./log"));
}

// 本番環境にのみ設定するもの
// if (process.env.MODE === "PRODCTION") { }

// 全体に反映させるもの
// m.use(require("./MiddlewareName"));

module.exports = m;
