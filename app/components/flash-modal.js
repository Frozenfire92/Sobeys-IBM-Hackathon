import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleModal: function(){
      this.get('target').send('toggleFlashModal');
    },
    save: function(){
      // start flash sale
    }
  }
});
