'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _api = require('../../api');

var _passwordHandler = require('../../auth/passwordHandler');

exports.default = async (req, res) => {
  // console.log('userRegisteration handler called', req.body);
  try {
    const { password } = req.body;
    const hasPassword = await (0, _passwordHandler.genHashPassword)(password);
    const respose = await (0, _api.addAstrologer)(_extends({}, req.body, { password: hasPassword }));
    // console.log('response of add user', respose);
    if (respose) {
      res.statusCode = 200;
      res.send(JSON.stringify(respose));
    }
  } catch (e) {
    // console.log('error in user registration', e);
    throw e;
  }
};