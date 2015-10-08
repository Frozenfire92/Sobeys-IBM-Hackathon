import Ember from 'ember';

export default Ember.Controller.extend({
  stores: [
    { id: 123, name: "Queen Street, Halifax" },
    { id: 234, name: "Lacewood, Halifax" },
    { id: 456, name: "North Street, Halifax" },
  ],
  products: [
    { id: 1, name: "Apples" },
    { id: 2, name: "Oranges" },
    { id: 3, name: "Bananas" },
    { id: 4, name: "Chips" },
    { id: 5, name: "Burgers" },
  ],
  amount: [
    { id: 10, name: "10" },
    { id: 25, name: "25" },
    { id: 50, name: "50" },
    { id: 75, name: "75" },
    { id: 100, name: "100" },
  ],

  init: function(){
    var yesterday = new Date();
    var today = new Date();
    yesterday.setDate(yesterday.getDate() - 3);
    this.set('toDate', today);
    this.set('fromDate', yesterday);
    this.set('currentAmount', this.get('amount')[0]);
  },

  chartData: {
    data: {
            x: 'x',
    //        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
            columns: [
                ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
    //            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 340, 200, 500, 250, 350]
            ]
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%Y-%m-%d'
                }
            }
        }
  },

  filterSelected: function(){
    return this.get('currentStore') && this.get('currentProduct') && this.get('currentAmount');
  }.property('currentStore', 'currentProduct'),

  activeFilter: "week",

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
    flashSale: function(){
      console.log(this.get('currentStore'), this.get('currentProduct'));
    }
  }
});
