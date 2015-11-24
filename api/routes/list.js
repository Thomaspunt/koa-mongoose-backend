// Require model
var Users = require('../model/users');

module.exports = function *() {
  var res = yield Users.find({});

  this.body = res;
};
