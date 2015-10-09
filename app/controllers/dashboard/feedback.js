import Ember from 'ember';

export default Ember.Controller.extend({
  theFeedback: [
      {
          "feedback": "Out of Heinz ketchup.",
          "date": moment(new Date("12SEP2015")).format("YYYY MMM Do")
      },
      {
          "feedback": "The bathroom was out of toilet paper",
          "date": moment(new Date("02SEP2015")).format("YYYY MMM Do")
      },
      {
          "feedback": "An employee was rude to me at the Deli counter.",
          "date": moment(new Date("01SEP2015")).format("YYYY MMM Do")
      },
      {
          "feedback": "Thanks for the great offers and discounts!",
          "date": moment(new Date("31AUG2015")).format("YYYY MMM Do")
      },
      {
          "feedback": "Spilled milk on the floor near the milk coolers.",
          "date": moment(new Date("26AUG2015")).format("YYYY MMM Do")
      }
  ],
  stores: [
    { id: 123, name: "Queen Street, Halifax" },
    { id: 234, name: "Lacewood, Halifax" },
    { id: 456, name: "North Street, Halifax" },
  ],
  activeFilter: "year",

  init: function(){
    this.set('currentStore', this.get('stores')[0]);
  },

  weekClass: function(){
    return this.get('activeFilter') == "week" ? "active" : "";
  }.property('activeFilter'),
  monthClass: function(){
    return this.get('activeFilter') == "month" ? "active" : "";
  }.property('activeFilter'),
  yearClass: function(){
    return this.get('activeFilter') == "year" ? "active" : "";
  }.property('activeFilter'),
  customClass: function(){
    return this.get('activeFilter') == "custom" ? "active" : "";
  }.property('activeFilter'),
  actions: {
    activeFilter: function(filter){
      this.set('activeFilter', filter);
    },
  }
});
