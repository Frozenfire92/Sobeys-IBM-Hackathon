/*
 * See https://docs.strongloop.com/display/public/LB/Creating+database+tables+for+built-in+models
 *
 */

var server = require('./server');
var ds = server.dataSources.db;
//var lbTables = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role'];
var modelConfig = require('./model-config.json')
var lbTables = Object.keys(modelConfig)
    .filter(function(key) {
        return key !== '_meta';
    });
ds.autoupdate(lbTables, function(er) {
      if (er) throw er;
        console.log('Looback tables [' + lbTables + '] created in ', ds.adapter.name);
          ds.disconnect();
});

