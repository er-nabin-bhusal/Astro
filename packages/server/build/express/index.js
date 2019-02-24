'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.post('/auth/login', _login2.default);
  app.post('/auth/verification', _userVerification2.default);
  app.post('/auth/userRegistration', _userRegistration2.default);
  app.post('/auth/astrologerRegistration', _astrologerRegistration2.default);
  app.post('/api/payment', _api.paymentHandler.doPayment);
};

var _login = require('./request-handler/login');

var _login2 = _interopRequireDefault(_login);

var _userRegistration = require('./request-handler/userRegistration');

var _userRegistration2 = _interopRequireDefault(_userRegistration);

var _userVerification = require('./request-handler/userVerification');

var _userVerification2 = _interopRequireDefault(_userVerification);

var _astrologerRegistration = require('./request-handler/astrologerRegistration');

var _astrologerRegistration2 = _interopRequireDefault(_astrologerRegistration);

var _api = require('../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }