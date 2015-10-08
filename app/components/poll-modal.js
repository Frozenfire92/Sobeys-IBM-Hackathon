import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleModal: function(){
      this.get('target').send('toggleModal');
    },
    save: function(){
      this.get('target').send('savePoll', this.get('title'), this.get('option1'), this.get('option2'), this.get('option3') );
    }
  }
});
