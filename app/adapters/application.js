import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://flash-api.mybluemix.net',
  namespace: 'api'
});
