import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['map-container'],
  container: null,
  map: null,
  kioskMarkers: [],

  defaultMapOptions: {
    center: new google.maps.LatLng(44.650356, -63.613676),
    zoom: 12,
    disableDefaultUI: true
  },

  kioskIcon: "assets/kioskIcon.svg",

  insertMap: function(){
    var self = this;

    // Get references to the map, and related properties
    self.set('container', Ember.$('.map-canvas')[0]);
    var container = self.get('container');
    var options = self.get('defaultMapOptions');
    var kioskMarkers = [];
    var kioskIcon = self.get('kioskIcon');

    var map = new window.google.maps.Map(container, options);
    self.set('map', map);

    // Place the kiosk icons, then save the property
    self.mockKiosks().forEach(function(kiosk){
      var marker = new google.maps.Marker({
        position: {lat: kiosk.lat, lng: kiosk.lng},
        map: map,
        // icon: kioskIcon,
        title: kiosk.name,
        storeId: kiosk.storeId
      });

      marker.addListener('click', function(){
        // Enter that kiosks route
      });

      kioskMarkers.push(marker);
    });
    self.set('kioskMarkers', kioskMarkers);

    // Reset the zoom on the map to fit all markers
    self.send('resetZoom');
  }.on('didInsertElement'),

  mockKiosks: function(){
    return [
      {
        lat: 44.637397,
        lng: -63.574255,
        name: "Queen St",
        storeId: 123
      },
      {
        lat: 44.653536,
        lng: -63.599003,
        name: "Windsor St",
        storeId: 321
      },
      {
        lat: 44.663005,
        lng: -63.657324,
        name: "Lacewood Dr",
        storeId: 654
      }
    ];
  },

  actions: {
    resetZoom: function(){
      var self = this;
      var map = self.get('map');
      var bounds = new google.maps.LatLngBounds();
      var kioskMarkers = self.get('kioskMarkers');
      for (var i=0; i<kioskMarkers.length; i++){
        bounds.extend(kioskMarkers[i].getPosition());
      }
      map.fitBounds(bounds);
    }
  }

});
