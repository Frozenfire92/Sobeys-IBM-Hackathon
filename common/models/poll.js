var async = require('async');
var _ = require('lodash');

module.exports = function(Poll) {
  Poll.stats = function(id, cb) {
    var app = Poll.app;
    var Response = app.models.Response;

    async.auto({
      // Get Poll
      poll: function(cb) {
        return Poll.findOne({
          id: id
        }, cb);
      },
      // Get Responses for Poll
      responses: function(cb) {
        return Response.find({
          poll: id
        }, cb);
      },
      // Calculate stats
      stats: ['poll', 'responses', function(cb, results) {
        // THIS IS BAD
        // Joel & Sarah's idea
        var startValue = 1; // 0;

        var poll = results.poll, responses = results.responses;
        // Initialize
        _.each(poll.answers, function(answer) {
          answer.responses = startValue;
        })
        // Count responses per answers
        var answers = _.indexBy(poll.answers, 'id');
        _.each(responses, function(response) {
          var answer = answers[response.answer];
          answer.responses += 1;
        });
        return cb(null, poll);
      }]
    }, function(err, results) {
      if (err) {
        return cb(err, null);
      }
      return cb(null, results.stats);
    });
  }
  Poll.remoteMethod('stats', {
    http: {path: '/:id/stats', verb: 'get'},
    accepts: [
      { arg: 'id', type:'number'},
    ],
    returns: {arg: 'poll', type: 'object'}
  })
};
