'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.dbPromise = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _sqlite = require('sqlite');

var _sqlite2 = _interopRequireDefault(_sqlite);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _insert = require('./insert');

var _insert2 = _interopRequireDefault(_insert);

var _find = require('./find');

var _find2 = _interopRequireDefault(_find);

var _findOne = require('./findOne');

var _findOne2 = _interopRequireDefault(_findOne);

var _upsert = require('./upsert');

var _upsert2 = _interopRequireDefault(_upsert);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const dbPromise = exports.dbPromise = _sqlite2.default.open('redirector.sqlite', { Promise: _bluebird2.default });

let dbInstance = null;
const getInstance = async () => {
  if (dbInstance !== null) {
    return dbInstance;
  }

  const db = await dbPromise;
  await db.migrate({ migrationsPath: _path2.default.resolve(__dirname, 'migrations') });
  dbInstance = {
    insert: _insert2.default.bind(null, db),
    find: _find2.default.bind(null, db),
    findOne: _findOne2.default.bind(null, db),
    update: _update2.default.bind(null, db),
    upsert: _upsert2.default.bind(null, db)
  };
  return dbInstance;
};

const init = exports.init = async () => {
  await getInstance();
};
exports.default = {
  execute: async func => {
    const db = await getInstance();
    const res = await func(db);
    return res;
  }
};