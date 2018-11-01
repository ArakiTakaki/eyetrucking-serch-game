const log = require("./log");
/**
 * middlewareを定義するファイル
 */
module.exports = function(express){
  express.use(log());
}