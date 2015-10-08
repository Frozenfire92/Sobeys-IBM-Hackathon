// Environment Variables
var database = (process.env.FLASH_DB_NAME || "flash");
var host = process.env.FLASH_DB_HOST || "localhost";
var user = process.env.FLASH_DB_USER;
var password = process.env.FLASH_DB_PASSWORD;

// Bluemix
if (process.env.VCAP_SERVICES) {
  var services = JSON.parse(process.env.VCAP_SERVICES);
  /*
  {
   "cleardb": [
      {
         "name":
         "label":
         "plan":
         "credentials": {
            "jdbcUrl":
            "uri":
            "name":
            "hostname":
            "port":
            "username":
            "password":
         }
      }
   ]
  }
  */
  var creds = services.cleardb[0].credentials;
  host = creds.hostname;
  database = creds.name;
  user = creds.username;
  password = creds.password;

}

module.exports = {
  "db": {
    "name": "db",
    "connector": "mysql",
    "database": database,
    "host": host,
    "user": user,
    "password": password,
    "connectionLimit": 32
  }
};
