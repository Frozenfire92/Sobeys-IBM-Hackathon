module.exports = function(FlashSale) {
  FlashSale.afterCreate = function(next) {
    var app = FlashSale.app;
    var flashSale = this;
    var Item = app.models.Item;
    // Get Item for ItemSk
    Item.findOne({
      where: {
        sk: parseInt(flashSale.itemSk)
      }
    }, function(err, item) {
      if (err || !item) {
        return next();
      }
      var text = item.englishDescription + ' is ' + flashSale.discount + '% off!';
      var data = {
        'ends': flashSale.endDate,
        'text': text
      };
      app.io.emit('flash-sale', data)
      next();
    });
  };
};
