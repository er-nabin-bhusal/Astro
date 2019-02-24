'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addBidhaUser = exports.addAstrologer = exports.paymentHandler = undefined;

var _stripePaymentHandler = require('./stripePaymentHandler');

var paymentHandler = _interopRequireWildcard(_stripePaymentHandler);

var _addBidhaUser = require('./addBidhaUser');

var _addBidhaUser2 = _interopRequireDefault(_addBidhaUser);

var _addAstrologer = require('./addAstrologer');

var _addAstrologer2 = _interopRequireDefault(_addAstrologer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.paymentHandler = paymentHandler;
exports.addAstrologer = _addAstrologer2.default;
exports.addBidhaUser = _addBidhaUser2.default;