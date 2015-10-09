import Ember from 'ember';

export default Ember.Component.extend({
  duration: 60,
  watcher: function(){
    var fi = this.get('flashitem');
    this.set('item', fi.name.substring(0, fi.name.indexOf(" -")));
    this.set('discount', fi.name.substring(fi.name.indexOf(" - ")));
    this.set('discount', this.get('discount').replace(" - ", ""));
    this.set('discount', this.get('discount').replace("% off", ""));
  }.observes('flashitem'),
  actions: {
    toggleModal: function(){
      this.get('target').send('toggleFlashModal');
    },
    save: function(){
      var fi = this.get('flashitem');
      var self = this;
      var ends = new Date();
      ends.setMinutes(ends.getMinutes() + self.get('duration'));
      console.log('ends', ends);
      $.post('http://flash-api.mybluemix.net/api/FlashSales', {
        itemSk: fi.sk,
        endDate: ends,
        discount: self.get('discount')
      }).done(function(d){
        console.log('done', d);
        this.send('toggleModal');
      })
    }
  }
});
