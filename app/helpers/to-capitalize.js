import Ember from 'ember';

export function toCapitalize(params/*, hash*/) {
  return params[0].charAt(0).toUpperCase() + params[0].slice(1);
}

export default Ember.Helper.helper(toCapitalize);
