class RoutesRegister {
  constructor(express) {
    this.express = express;
    this.regist();
  }

  get(path, controller) {
    this.express.get(path, this._setController(controller));
  }

  post(path, controller) {
    this.express.post(path, this._setController(controller));
  }

  put(path, controller) {
    this.express.put(path, this._setController(controller));
  }

  delete(path, controller) {
    this.express.delete(path, this._setController(controller));
  }

  _setController(path) {
    return require(`../controller/${path}`);
  }

  regist(){
  }
}

module.exports = RoutesRegister
