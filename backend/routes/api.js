const RoutesClass = require("../lib/RouteClass");

class Routes extends RoutesClass {
  regist(){
    this.get('/', "base");
  }
}
module.exports = function(express){
  new Routes(express);
};
