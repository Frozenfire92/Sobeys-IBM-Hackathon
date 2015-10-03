export function initialize(container, application) {
  application.inject('controller:dashboard', 'time', 'service:time');
}

export default {
  name: 'time-service',
  initialize: initialize
};
