'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async record => {
  const respose = await _db2.default.execute(async ({ insert }) => {
    const res = await insert('User', record);
    // console.log('add bidha user Response', res);
    return res;
  });
  return respose;
};