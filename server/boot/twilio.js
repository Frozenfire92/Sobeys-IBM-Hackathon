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
    var body = req.body;
    if (!body) {
      return res.status(500).send('No body parsed');
    }
    var phone = body.From;
    if (!phone) {
      return res.status(500).send('No phone parsed');
    }
    var msg = body.Body;
    if (!msg) {
      return res.status(500).send('No msg parsed');
    }

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
