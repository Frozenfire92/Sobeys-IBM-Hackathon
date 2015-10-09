var accountSid = "ACa24b7c8257d92e5346d56abea5db1c7c";
var authToken = "0824a245c13a34b9dcb15fdf5d72334e";
// if (!(authToken && accountSid)) {
//   throw new Error("Environment variables TWILIO_AUTH_TOKEN and TWILIO_ACCOUNT_SID are required.");
// }

var twilio = require('twilio', accountSid, authToken);

module.exports = function(server) {
  var Response = server.models.Response;

  // Install a `/` route that returns server status
  server.post('/api/sms', twilio.webhook(authToken, {
    validate: false
  }), function(req, res) {

    var phone = req.body.From;
    var msg = req.body.Body;

    Response.respondToPoll(null, phone, msg, function(err) {
      var twiml = new twilio.TwimlResponse();
      if (err) {
        twiml.message('An error occured. Plese try again.');
      } else {
        twiml.message('Thank you for your response!');
      }
      // Respond to User's SMS
      res.send(twiml);
    });

  });
};
