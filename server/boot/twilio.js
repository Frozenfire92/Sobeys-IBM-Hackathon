var authToken = process.env.TWILIO_AUTH_TOKEN || "62dd266cb16da8622efe809a00831b07";
var accountSid = process.env.TWILIO_ACCOUNT_SID || "AC5b628e2acff7cefbb504b98ea6fe1a89";
if (!(authToken && accountSid)) {
  throw new Error("Environment variables TWILIO_AUTH_TOKEN and TWILIO_ACCOUNT_SID are required.");
}

var twilio = require('twilio', accountSid, authToken);

module.exports = function(server) {
  var Response = server.models.Response;

  // Install a `/` route that returns server status
  server.post('/api/sms', twilio.webhook(), function(req, res) {

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
