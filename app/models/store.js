import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  polls: DS.attr(),
  airmiles: DS.attr()
});
