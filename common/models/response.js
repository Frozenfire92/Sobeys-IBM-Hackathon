var async = require('async');

module.exports = function(Response) {
  Response.respondToPoll = function(date, phone, msg, cb) {
    var app = Response.app;
    var Poll = app.models.Poll;

    if (!date) {
      // See http://stackoverflow.com/a/21884814/2578205
      var dateToDay = function(d) {
        function two(n) {
          return (n < 10 ? '0' : '') + n;
        }
        var str = (
          d.getFullYear()
          + '-' +
          two(d.getMonth() + 1)
          + '-' +
          two(d.getDate())
        );
        return str;
      };

      date = dateToDay(new Date());
    }

    // TODO
    var selection = parseInt(msg);

    async.waterfall([
      // Poll
      function(cb) {
        // console.log('find poll', date);
        // Find Poll for date
        Poll.findOne({
          where: {
            'date': date
          }
        }, function(err, poll) {
          if (err) {
            return cb(err, null);
          }
          if (!poll) {
            return cb(new Error("No poll found for this day: "+date), null);
          }
          return cb(null, poll);
        });
      },
      // Delete existing
      function(poll, cb) {
        Response.destroyAll({
          poll: poll.id,
          phone: phone
        }, function(err, info) {
          if (err) {
            return cb(err, null);
          }
          return cb(null, poll);
        });
      },
      // Create new Response
      function(poll, cb) {
        // TODO: Upsert (update or insert)
        // Insert Response for Phone+Poll
        // console.log('poll', poll);
        Response.create({
          poll: poll.id,
          phone: phone,
          answer: selection,
        }, cb);
      }
    ], function(err, response) {
      // console.log('response', err, response);
      // Broadcast updated Poll stats
      Poll.stats(response.poll, function(err, stats) {
        if (!err) {
          app.io.emit('poll-changed', stats);
        }
      });
      return cb(err, response);
    });

  }
  Response.remoteMethod('respondToPoll', {
    http: {path: '/respond', verb: 'post'},
    accepts: [
      { arg: 'date', type:'date'},
      { arg: 'phone', type:'string', required: true},
      { arg: 'msg', type:'string', required: true}
    ],
    returns: {arg: 'response', type: 'object'}
  })
};
