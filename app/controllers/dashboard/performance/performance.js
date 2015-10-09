import Ember from 'ember';

export default Ember.Controller.extend({
  stores: [
    { id: 123, name: "Queen Street, Halifax" },
    { id: 234, name: "Lacewood, Halifax" },
    { id: 456, name: "North Street, Halifax" },
  ],
  realProducts: Ember.A(),

  products: function(){
    var mock = this.get('mockProducts');
    console.log('mock', mock);
    var top = _.map(mock.top, function(d){
        return d.product;
    });
    var bottom = _.map(mock.bottom, function(d){
        return d.product;
    });
    var allproducts = _.union(top, bottom);
    var realProducts = this.get('realProducts');
    var promise = new Promise(function(resolve, reject){
      resolve
    })
    console.log('allproducts', allproducts);
    _.each(allproducts, function(p){
      $.get('http://flash-api.mybluemix.net/api/Items?filter=%7B%22where%22%3A%7B%22sk%22%3A'+p+'%7D%7D').done(function(d){
        console.log(d);
        if (d[0].englishDescription){
          realProducts.pushObject({sk: p, name: d[0].englishDescription});
        }
      });
    });
  },

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
    console.log(this.get('model'));
    this.products();
  },

  mockProducts: {
    top: [
            {
                "amountSold": 2581,
                "day": "24AUG2015",
                "product": "15673352",
                "storeId": "11152"
            },
            {
                "amountSold": 3003,
                "day": "21AUG2015",
                "product": "15623285",
                "storeId": "11152"
            },
            {
                "amountSold": 3377,
                "day": "23AUG2015",
                "product": "15661757",
                "storeId": "250"
            },
            {
                "amountSold": 2466,
                "day": "22AUG2015",
                "product": "15291148",
                "storeId": "250"
            },
            {
                "amountSold": 2242,
                "day": "22AUG2015",
                "product": "14899956",
                "storeId": "250"
            },
            {
                "amountSold": 2735,
                "day": "25AUG2015",
                "product": "15618991",
                "storeId": "11152"
            },
            {
                "amountSold": 4913,
                "day": "25AUG2015",
                "product": "15771785",
                "storeId": "11152"
            },
            {
                "amountSold": 4039,
                "day": "21AUG2015",
                "product": "15722920",
                "storeId": "219"
            },
            {
                "amountSold": 2683,
                "day": "22AUG2015",
                "product": "15546653",
                "storeId": "250"
            },
            {
                "amountSold": 4016,
                "day": "21AUG2015",
                "product": "11740941",
                "storeId": "219"
            },
            {
                "amountSold": 2514,
                "day": "22AUG2015",
                "product": "15722918",
                "storeId": "219"
            },
            {
                "amountSold": 3580,
                "day": "21AUG2015",
                "product": "15628845",
                "storeId": "11152"
            },
            {
                "amountSold": 2962,
                "day": "22AUG2015",
                "product": "15591272",
                "storeId": "250"
            },
            {
                "amountSold": 3025,
                "day": "21AUG2015",
                "product": "15591273",
                "storeId": "11152"
            },
            {
                "amountSold": 3566,
                "day": "21AUG2015",
                "product": "15610042",
                "storeId": "219"
            },
            {
                "amountSold": 3186,
                "day": "22AUG2015",
                "product": "15711280",
                "storeId": "250"
            },
            {
                "amountSold": 2982,
                "day": "22AUG2015",
                "product": "15631639",
                "storeId": "250"
            },
            {
                "amountSold": 4260,
                "day": "22AUG2015",
                "product": "15720564",
                "storeId": "11152"
            },
            {
                "amountSold": 4269,
                "day": "22AUG2015",
                "product": "15742406",
                "storeId": "250"
            },
            {
                "amountSold": 2467,
                "day": "21AUG2015",
                "product": "15704151",
                "storeId": "250"
            },
            {
                "amountSold": 3371,
                "day": "21AUG2015",
                "product": "15697174",
                "storeId": "250"
            },
            {
                "amountSold": 2489,
                "day": "21AUG2015",
                "product": "15593830",
                "storeId": "11152"
            },
            {
                "amountSold": 2720,
                "day": "21AUG2015",
                "product": "15736811",
                "storeId": "250"
            },
            {
                "amountSold": 3710,
                "day": "23AUG2015",
                "product": "15607474",
                "storeId": "11152"
            },
            {
                "amountSold": 4293,
                "day": "21AUG2015",
                "product": "15640459",
                "storeId": "11152"
            },
            {
                "amountSold": 2939,
                "day": "21AUG2015",
                "product": "12518517",
                "storeId": "11152"
            },
            {
                "amountSold": 3057,
                "day": "21AUG2015",
                "product": "15711277",
                "storeId": "11152"
            },
            {
                "amountSold": 2382,
                "day": "21AUG2015",
                "product": "15253068",
                "storeId": "250"
            },
            {
                "amountSold": 3103,
                "day": "21AUG2015",
                "product": "15265026",
                "storeId": "219"
            },
            {
                "amountSold": 3316,
                "day": "21AUG2015",
                "product": "15711276",
                "storeId": "11152"
            },
            {
                "amountSold": 2450,
                "day": "21AUG2015",
                "product": "14567596",
                "storeId": "250"
            },
            {
                "amountSold": 4136,
                "day": "22AUG2015",
                "product": "12518530",
                "storeId": "11152"
            },
            {
                "amountSold": 2666,
                "day": "23AUG2015",
                "product": "15661854",
                "storeId": "219"
            },
            {
                "amountSold": 2644,
                "day": "21AUG2015",
                "product": "15580162",
                "storeId": "250"
            },
            {
                "amountSold": 5192,
                "day": "22AUG2015",
                "product": "15722431",
                "storeId": "11152"
            },
            {
                "amountSold": 2392,
                "day": "21AUG2015",
                "product": "14383206",
                "storeId": "219"
            },
            {
                "amountSold": 2358,
                "day": "21AUG2015",
                "product": "15611524",
                "storeId": "250"
            },
            {
                "amountSold": 3055,
                "day": "30AUG2015",
                "product": "15629308",
                "storeId": "250"
            },
            {
                "amountSold": 2756,
                "day": "21AUG2015",
                "product": "14905344",
                "storeId": "250"
            },
            {
                "amountSold": 2265,
                "day": "22AUG2015",
                "product": "15721661",
                "storeId": "11152"
            },
            {
                "amountSold": 3154,
                "day": "21AUG2015",
                "product": "15692495",
                "storeId": "250"
            },
            {
                "amountSold": 4339,
                "day": "21AUG2015",
                "product": "15611519",
                "storeId": "250"
            },
            {
                "amountSold": 3099,
                "day": "26AUG2015",
                "product": "15729872",
                "storeId": "11152"
            },
            {
                "amountSold": 2797,
                "day": "21AUG2015",
                "product": "11680016",
                "storeId": "250"
            },
            {
                "amountSold": 2349,
                "day": "22AUG2015",
                "product": "15611489",
                "storeId": "219"
            },
            {
                "amountSold": 2559,
                "day": "21AUG2015",
                "product": "15591274",
                "storeId": "219"
            },
            {
                "amountSold": 2288,
                "day": "21AUG2015",
                "product": "15630425",
                "storeId": "250"
            },
            {
                "amountSold": 2311,
                "day": "21AUG2015",
                "product": "14567659",
                "storeId": "219"
            },
            {
                "amountSold": 2430,
                "day": "25AUG2015",
                "product": "12518502",
                "storeId": "219"
            },
            {
                "amountSold": 6663,
                "day": "21AUG2015",
                "product": "15722923",
                "storeId": "219"
            }
    ],

    bottom: [
        {
                "amountSold": "2",
                "day": "26AUG2015",
                "product": "11732992",
                "storeId": "11152"
            },
            {
                "amountSold": 4,
                "day": "30AUG2015",
                "product": "11704576",
                "storeId": "1"
            },
            {
                "amountSold": 17,
                "day": "30AUG2015",
                "product": "11749863",
                "storeId": "1"
            },
            {
                "amountSold": 5,
                "day": "30AUG2015",
                "product": "11734165",
                "storeId": "3"
            },
            {
                "amountSold": 9,
                "day": "04SEP2015",
                "product": "11747686",
                "storeId": "5"
            },
            {
                "amountSold": "2",
                "day": "29AUG2015",
                "product": "14927241",
                "storeId": "250"
            },
            {
                "amountSold": "5",
                "day": "06SEP2015",
                "product": "14306403",
                "storeId": "219"
            },
            {
                "amountSold": 6,
                "day": "31AUG2015",
                "product": "11671215",
                "storeId": "4"
            },
            {
                "amountSold": "9",
                "day": "27AUG2015",
                "product": "14454753",
                "storeId": "250"
            },
            {
                "amountSold": 8,
                "day": "27AUG2015",
                "product": "11970740",
                "storeId": "6"
            },
            {
                "amountSold": 24,
                "day": "29AUG2015",
                "product": "15699910",
                "storeId": "19"
            },
            {
                "amountSold": 7,
                "day": "25AUG2015",
                "product": "11840284",
                "storeId": "1"
            },
            {
                "amountSold": "3",
                "day": "24AUG2015",
                "product": "14292949",
                "storeId": "11152"
            },
            {
                "amountSold": 17,
                "day": "22AUG2015",
                "product": "11732657",
                "storeId": "2"
            },
            {
                "amountSold": "8",
                "day": "12SEP2015",
                "product": "11748576",
                "storeId": "219"
            },
            {
                "amountSold": 13,
                "day": "10SEP2015",
                "product": "13973580",
                "storeId": "8"
            },
            {
                "amountSold": "5",
                "day": "03SEP2015",
                "product": "12185964",
                "storeId": "250"
            },
            {
                "amountSold": 5,
                "day": "01SEP2015",
                "product": "11820129",
                "storeId": "4"
            },
            {
                "amountSold": 8,
                "day": "30AUG2015",
                "product": "11733080",
                "storeId": "3"
            },
            {
                "amountSold": 14,
                "day": "27AUG2015",
                "product": "11686868",
                "storeId": "3"
            },
            {
                "amountSold": "3",
                "day": "12SEP2015",
                "product": "12580053",
                "storeId": "250"
            },
            {
                "amountSold": 20,
                "day": "23AUG2015",
                "product": "15211858",
                "storeId": "4"
            },
            {
                "amountSold": "7",
                "day": "04SEP2015",
                "product": "12864692",
                "storeId": "11152"
            },
            {
                "amountSold": "3",
                "day": "13SEP2015",
                "product": "12184567",
                "storeId": "219"
            },
            {
                "amountSold": 5,
                "day": "25AUG2015",
                "product": "13796978",
                "storeId": "3"
            },
            {
                "amountSold": 23,
                "day": "31AUG2015",
                "product": "12779336",
                "storeId": "11"
            },
            {
                "amountSold": "2",
                "day": "03SEP2015",
                "product": "11688057",
                "storeId": "250"
            },
            {
                "amountSold": 3,
                "day": "02SEP2015",
                "product": "11669539",
                "storeId": "1"
            },
            {
                "amountSold": "10",
                "day": "08SEP2015",
                "product": "12580032",
                "storeId": "219"
            },
            {
                "amountSold": 16,
                "day": "26AUG2015",
                "product": "11843375",
                "storeId": "6"
            },
            {
                "amountSold": "7",
                "day": "09SEP2015",
                "product": "15619156",
                "storeId": "219"
            },
            {
                "amountSold": 9,
                "day": "01SEP2015",
                "product": "11635109",
                "storeId": "1"
            },
            {
                "amountSold": "2",
                "day": "03SEP2015",
                "product": "12187280",
                "storeId": "11152"
            },
            {
                "amountSold": "8",
                "day": "01SEP2015",
                "product": "12210053",
                "storeId": "250"
            },
            {
                "amountSold": 19,
                "day": "28AUG2015",
                "product": "14496998",
                "storeId": "1"
            },
            {
                "amountSold": "5",
                "day": "10SEP2015",
                "product": "12850509",
                "storeId": "219"
            },
            {
                "amountSold": 17,
                "day": "25AUG2015",
                "product": "14533979",
                "storeId": "4"
            },
            {
                "amountSold": "6",
                "day": "05SEP2015",
                "product": "12811196",
                "storeId": "11152"
            },
            {
                "amountSold": 16,
                "day": "06SEP2015",
                "product": "14345807",
                "storeId": "3"
            },
            {
                "amountSold": 2,
                "day": "03SEP2015",
                "product": "11614304",
                "storeId": "1"
            },
            {
                "amountSold": "14",
                "day": "03SEP2015",
                "product": "15632867",
                "storeId": "250"
            },
            {
                "amountSold": "2",
                "day": "05SEP2015",
                "product": "11670983",
                "storeId": "219"
            },
            {
                "amountSold": "4",
                "day": "02SEP2015",
                "product": "12187298",
                "storeId": "219"
            },
            {
                "amountSold": 13,
                "day": "26AUG2015",
                "product": "11743879",
                "storeId": "1"
            },
            {
                "amountSold": 5,
                "day": "22AUG2015",
                "product": "11653276",
                "storeId": "1"
            },
            {
                "amountSold": 7,
                "day": "27AUG2015",
                "product": "14059641",
                "storeId": "4"
            },
            {
                "amountSold": 2,
                "day": "02SEP2015",
                "product": "11617362",
                "storeId": "1"
            },
            {
                "amountSold": 11,
                "day": "08SEP2015",
                "product": "11833494",
                "storeId": "1"
            },
            {
                "amountSold": 10,
                "day": "29AUG2015",
                "product": "14083009",
                "storeId": "8"
            },
            {
                "amountSold": 9,
                "day": "31AUG2015",
                "product": "15278612",
                "storeId": "7"
            },
            {
                "amountSold": "2",
                "day": "01SEP2015",
                "product": "14066885",
                "storeId": "11152"
            },
            {
                "amountSold": 6,
                "day": "23AUG2015",
                "product": "14043803",
                "storeId": "1"
            },
            {
                "amountSold": 22,
                "day": "02SEP2015",
                "product": "15009154",
                "storeId": "1"
            },
            {
                "amountSold": "3",
                "day": "09SEP2015",
                "product": "11733872",
                "storeId": "219"
            },
            {
                "amountSold": "24",
                "day": "05SEP2015",
                "product": "15600712",
                "storeId": "250"
            },
            {
                "amountSold": 14,
                "day": "25AUG2015",
                "product": "11686487",
                "storeId": "3"
            },
            {
                "amountSold": 8,
                "day": "25AUG2015",
                "product": "11635038",
                "storeId": "2"
            },
            {
                "amountSold": "2",
                "day": "10SEP2015",
                "product": "11743326",
                "storeId": "11152"
            },
            {
                "amountSold": 8,
                "day": "22AUG2015",
                "product": "11741819",
                "storeId": "2"
            },
            {
                "amountSold": 2,
                "day": "22AUG2015",
                "product": "12932705",
                "storeId": "1"
            },
            {
                "amountSold": "6",
                "day": "10SEP2015",
                "product": "15703550",
                "storeId": "250"
            },
            {
                "amountSold": 20,
                "day": "02SEP2015",
                "product": "11744427",
                "storeId": "5"
            },
            {
                "amountSold": 6,
                "day": "22AUG2015",
                "product": "11615410",
                "storeId": "1"
            },
            {
                "amountSold": "3",
                "day": "10SEP2015",
                "product": "14875985",
                "storeId": "219"
            },
            {
                "amountSold": "3",
                "day": "10SEP2015",
                "product": "14142182",
                "storeId": "219"
            },
            {
                "amountSold": "3",
                "day": "11SEP2015",
                "product": "11675613",
                "storeId": "11152"
            },
            {
                "amountSold": 8,
                "day": "24AUG2015",
                "product": "12786925",
                "storeId": "1"
            },
            {
                "amountSold": "9",
                "day": "29AUG2015",
                "product": "14270803",
                "storeId": "11152"
            },
            {
                "amountSold": 5,
                "day": "22AUG2015",
                "product": "12861772",
                "storeId": "1"
            },
            {
                "amountSold": "2",
                "day": "30AUG2015",
                "product": "14149223",
                "storeId": "250"
            },
            {
                "amountSold": 12,
                "day": "21AUG2015",
                "product": "12845243",
                "storeId": "3"
            },
            {
                "amountSold": "2",
                "day": "06SEP2015",
                "product": "15140633",
                "storeId": "219"
            },
            {
                "amountSold": 5,
                "day": "01SEP2015",
                "product": "15623198",
                "storeId": "3"
            },
            {
                "amountSold": "9",
                "day": "06SEP2015",
                "product": "11866346",
                "storeId": "250"
            },
            {
                "amountSold": 5,
                "day": "24AUG2015",
                "product": "11658161",
                "storeId": "1"
            },
            {
                "amountSold": 9,
                "day": "26AUG2015",
                "product": "11646636",
                "storeId": "1"
            },
            {
                "amountSold": "7",
                "day": "05SEP2015",
                "product": "11746700",
                "storeId": "219"
            },
            {
                "amountSold": 7,
                "day": "24AUG2015",
                "product": "11645094",
                "storeId": "1"
            },
            {
                "amountSold": 6,
                "day": "24AUG2015",
                "product": "13884647",
                "storeId": "1"
            },
            {
                "amountSold": "2",
                "day": "23AUG2015",
                "product": "11841232",
                "storeId": "219"
            },
            {
                "amountSold": 14,
                "day": "22AUG2015",
                "product": "12176521",
                "storeId": "1"
            },
            {
                "amountSold": 8,
                "day": "26AUG2015",
                "product": "12754708",
                "storeId": "3"
            },
            {
                "amountSold": "10",
                "day": "03SEP2015",
                "product": "15568458",
                "storeId": "219"
            },
            {
                "amountSold": "2",
                "day": "12SEP2015",
                "product": "11753767",
                "storeId": "219"
            },
            {
                "amountSold": "2",
                "day": "02SEP2015",
                "product": "11692444",
                "storeId": "219"
            },
            {
                "amountSold": "5",
                "day": "10SEP2015",
                "product": "11681308",
                "storeId": "250"
            },
            {
                "amountSold": 8,
                "day": "08SEP2015",
                "product": "14993818",
                "storeId": "7"
            },
            {
                "amountSold": 2,
                "day": "01SEP2015",
                "product": "11611286",
                "storeId": "1"
            },
            {
                "amountSold": 10,
                "day": "08SEP2015",
                "product": "15625287",
                "storeId": "3"
            },
            {
                "amountSold": "10",
                "day": "31AUG2015",
                "product": "15670743",
                "storeId": "11152"
            },
            {
                "amountSold": 3,
                "day": "06SEP2015",
                "product": "11698834",
                "storeId": "1"
            },
            {
                "amountSold": 13,
                "day": "22AUG2015",
                "product": "14570905",
                "storeId": "10"
            },
            {
                "amountSold": 8,
                "day": "30AUG2015",
                "product": "12857288",
                "storeId": "7"
            },
            {
                "amountSold": 15,
                "day": "27AUG2015",
                "product": "11737253",
                "storeId": "1"
            },
            {
                "amountSold": 10,
                "day": "28AUG2015",
                "product": "15750364",
                "storeId": "1"
            },
            {
                "amountSold": "7",
                "day": "24AUG2015",
                "product": "14478010",
                "storeId": "11152"
            },
            {
                "amountSold": 12,
                "day": "21AUG2015",
                "product": "14147535",
                "storeId": "4"
            },
            {
                "amountSold": "3",
                "day": "11SEP2015",
                "product": "11745282",
                "storeId": "219"
            },
            {
                "amountSold": 15,
                "day": "28AUG2015",
                "product": "15222314",
                "storeId": "1"
            },
            {
                "amountSold": "2",
                "day": "28AUG2015",
                "product": "14536577",
                "storeId": "250"
            }
    ]
  },

  axis: {
      x: {
          type: 'timeseries',
          tick: {
              format: '%Y-%m-%d'
          }
      }
  },

  filteredData: function(){
    var activeFilter = this.get('activeFilter');
    var mockProducts = this.get('mockProducts');
    var currentAmount = this.get('currentAmount').id;
    var fromDate = this.get('fromDate');
    var toDate = this.get('toDate');
    var realProducts = this.get('realProducts');


  }.property(),

  chartData: {
    data: {
            x: 'x',
            columns: [
                ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'],
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 130, 340, 200, 500, 250, 350]
            ]
        }
  },

  filterSelected: function(){
    return this.get('currentStore') && this.get('currentProduct') && this.get('currentAmount');
  }.property('currentStore', 'currentProduct'),

  activeFilter: "month",

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
