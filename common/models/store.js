var airmiles = require('../fixtures/airmiles.js');

module.exports = function(Store) {
  Store.airmiles = function(id, cb) {
    var sid = id.toString();
    var storeAirmiles = airmiles[sid];
    return cb(null, storeAirmiles);
  };
  Store.remoteMethod('airmiles', {
    accepts: [
      {arg: 'id', type: 'number', required: true}
    ],
    http: {path: '/:id/airmiles', verb: 'get'},
    returns: [
      {arg: 'airmiles', type: 'object'}
    ]
  })
};
