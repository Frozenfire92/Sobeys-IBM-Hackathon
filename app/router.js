import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', function() {
    this.route('kiosks', function() {
      this.route('kiosk', { 'path' : "/:id" });
    });
    this.route('performance', {}, function() {
      this.route('performance', {});
    });
  });
});

export default Router;
