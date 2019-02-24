'use strict';

require('@babel/polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _appNode = require('app-node');

var _appNode2 = _interopRequireDefault(_appNode);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express3 = require('./express');

var _express4 = _interopRequireDefault(_express3);

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 4001;
const app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ limit: '10mb', extended: true }));
app.use(_bodyParser2.default.json({ limit: '10mb', extended: true }));
const server = _http2.default.createServer(app);
(0, _appNode2.default)(async () => {
  await (0, _db.init)();
  (0, _express4.default)(app);
  console.log(`server started at port ${port}`);
  server.listen(port);
});