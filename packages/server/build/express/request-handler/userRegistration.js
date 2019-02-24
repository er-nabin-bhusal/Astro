'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../../api');

exports.default = async (req, res) => {
  // console.log('userRegisteration handler called', req.body);
  try {
    const respose = await (0, _api.addBidhaUser)(req.body);
    // console.log('response of bidha user', respose);
    if (respose) {
      res.statusCode = 200;
      res.send(JSON.stringify(respose));
    }
  } catch (e) {
    // console.log('error in  nidha user registration', e);
    throw e;
  }
};