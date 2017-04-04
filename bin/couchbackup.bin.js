#!/usr/bin/env node

// switch on debug messages
process.env.DEBUG = 'couchbackup';

var config = require('../includes/config.js'),
  debug = require('debug')('couchbackup'),
  fs = require('fs'),
  couchbackup = require('../app.js');
  
if (config.COUCH_RESUME) {
  if (!config.COUCH_LOG) {
    console.error('ERROR: You must supply a log file name to resume a backup');
    process.exit(1);
  }

  if (!fs.existsSync(config.COUCH_LOG)) {
    console.error('ERROR: To resume a backup, the log file must exist');
    process.exit(1);
  }
}

// backup to stdout
couchbackup.backupStream(process.stdout, config, function() {
  
});


 
