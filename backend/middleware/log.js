module.exports = function() {
  return function(req, res, next) {
    console.log('Time:', Date.now());
    next();
  }
}