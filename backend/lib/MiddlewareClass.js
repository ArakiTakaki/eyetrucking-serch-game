class RoutesRegister {
  constructor(express) {
    this.express = express;
    this.regist();
  }

  add(middleware) {
    this.express.use(this._setMiddleware(middleware));
  }

  _setMiddleware(path) {
    return require(`../middleware/${path}`);
  }

  regist(){}

}

module.exports = RoutesRegister
