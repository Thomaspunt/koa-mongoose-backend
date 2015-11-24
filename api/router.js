"use strict";

var route = require('koa-route');

// Export crud methods
module.exports = function routes(app) {
  app.use(route.get('/', require('./routes/list')));
};
