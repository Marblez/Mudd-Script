// INFORMATION:
// Required Javascript libraries: PhantomJS, NodeCron

// Script begins //
try{
var CronJob = require('cron').CronJob;
var job = new CronJob('00 00 00 * * 1-7', function() {
   // Runs every day (Monday through Sunday) at 12:00:00 AM
   // RUN BOOKNOW.js and other versions of the file

  }, function () {
    /* This function is executed when the job stops */
    console.log("END");
    console.log("Cron job ended.");
  },
  true, /* Start the job right now */
  'America/Chicago' /* Time zone of this job. */
);
}
catch(ex) {
	console.log("Cron pattern not valid");
}
