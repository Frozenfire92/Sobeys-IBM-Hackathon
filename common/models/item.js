var products = require('../fixtures/products.js');

module.exports = function(Item) {
  Item.products = function(cb) {
    return cb(null, products);
  };
  Item.remoteMethod('products', {
    http: {path: '/product-stats', verb: 'get'},
    returns: [
      {arg: 'stats', type: 'object'}
    ]
  });
};
