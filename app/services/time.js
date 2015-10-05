import Ember from 'ember';

export default Ember.Service.extend({
  now: null,

  init: function(){
    this.set('now', new Date());
  },

  tick: function(){
    var clock = this;
    Ember.run.later(function(){
      clock.set('now', new Date())
    }, 20000);
  }.observes('now').on('init'),

  niceTime: function(){
    return Ember.String.htmlSafe(
      moment(this.get('now')).format("MMM Do")
      + "<br>" +
      moment(this.get('now')).format("h:mm a")
    );
  }.property('now')
});
