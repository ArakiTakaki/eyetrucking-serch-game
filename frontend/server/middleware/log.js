const moment = require("moment");

/**
 * アクセスログをテーブル形式で出力するmiddleware
 */
module.exports = function(req, res, next) {
  const table = {};
  table.time = moment().format("YYYY/MM/DD hh:mm:ss");
  table.url = req.originalUrl;
  table.type = req.method;
  table.ip = req.ip;
  console.table(table);
  next();
};
