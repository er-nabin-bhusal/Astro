'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doPayment = undefined;

var _stripe = require('stripe');

var _stripe2 = _interopRequireDefault(_stripe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const stripeFunc = (0, _stripe2.default)('sk_test_CqTsz9HKdKHCnp7g44dDwXBV');

const doPayment = exports.doPayment = (req, res) => {
  // console.log('payment metod called', req);
  return stripeFunc.charges.create({
    amount: 100,
    currency: 'usd',
    source: 'tok_visa',
    description: 'Test payment'
  }).then(result => {});
};