const MiddlewareClass = require("../lib/MiddlewareClass");

class Middleware extends MiddlewareClass {
  regist(){
    this.add("log");
  }
}

module.exports = function(express) {
  new Middleware(express);
}
