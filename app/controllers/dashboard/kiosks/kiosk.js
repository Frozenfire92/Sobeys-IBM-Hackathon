import Ember from 'ember';

export default Ember.Controller.extend({
  shown: false,
  actions: {
    toggleModal: function(){
      this.toggleProperty('shown');
    },
    savePoll: function(title, one, two, three){
      console.log('save', title, one, two, three);
    }
  }
});
