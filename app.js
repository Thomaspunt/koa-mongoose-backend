"use strict";

// Modules
var koa = require("koa"),
    logger = require('koa-logger'),
    mount = require('koa-mount');

// Routes
var router = require('./api/router');

// Create koa app
var app = koa();

// Middleware
app.use(logger());

// Routes
router(app);

// Define configurable port
var port = process.env.PORT || 3000;

// Listen for connections
app.listen(port);

// Log port
console.log('Server listening on port ' + port);
