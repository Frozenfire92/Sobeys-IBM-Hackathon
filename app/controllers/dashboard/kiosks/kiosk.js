import Ember from 'ember';

export default Ember.Controller.extend({
  pollshown: false,
  flashshown: false,
  lastFlash: {
    sk: 14071325,
    name: "Lay's Chips - 30% off",
    date: moment(new Date(1443796200000)).format("MMM D YYYY, h:mm a"),
    sold: 10000
  },
  bestFlash: {
    sk: 11601504,
    name: "Apples - 50% off",
    date: moment(new Date(1438525800000)).format("MMM D YYYY, h:mm a"),
    sold: 1000000
  },
  worstFlash: {
    sk: 11732627,
    name: "Glad Bags - 50% off",
    date: moment(new Date(1439164800000)).format("MMM D YYYY, h:mm a"),
    sold: 1000
  },
  yesterdaysPoll: {
    question: "Favorite fruit",
    options: ["Banana", "Apple", "Orange"],
    votes: 1324
  },
  init: function(){
    var self = this;
    //get current poll
    $.get("http://flash-api.mybluemix.net/api/Polls/12/stats").done(function(d){
      console.log(d);
      var obj = {
        question: d.poll.question,
        options: _.map(d.poll.answers, function(da){return da.name;}),
        votes: _.reduce(d.poll.answers, function(memo, da){return memo + da.responses}, 0)
      }
      self.set('todaysPoll', obj);
    });
    // Socket for updates
    var socket = io('http://flash-api.mybluemix.net');
    socket.on('poll-changed', function (d) {
        console.log(d);
        var obj = {
          question: d.question,
          options: _.map(d.answers, function(da){return da.name;}),
          votes: _.reduce(d.answers, function(memo, da){return memo + da.responses}, 0)
        }
        self.set('todaysPoll', obj);
    });
  },
  todaysPoll: null,
  actions: {
    toggleModal: function(){
      this.toggleProperty('pollshown');
    },
    savePoll: function(title, one, two, three){
      console.log('save', title, one, two, three);
    },
    flashAgain: function(type){
      switch (type){
        case "last":
          this.set('flashitem', this.get('lastFlash'));
          break;
        case "best":
          this.set('flashitem', this.get('bestFlash'));
          break;
        case "worst":
          this.set('flashitem', this.get('worstFlash'));
          break;
      }
      this.toggleProperty('flashshown');
    },
    toggleFlashModal: function(type){
      this.toggleProperty('flashshown');
    }
  }
});
