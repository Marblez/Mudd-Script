// CONFIGURE USER INFORMATION HERE:
var firstname = "Matthew";
var lastname = "Wang";
var email = "MatthewWang2020@U.northwestern.edu";

// INFORMATION:
// Required Javascript libraries: PhantomJS, NodeCron

// Script begins //


console.log("Mudd Library large study room automatic reservation");
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day =today.getDate();
console.log("Today's date: "+month+"/"+day+"/"+year);

var calculateID = function(year,month,day){
// Calculates elementID of needed squares to click
};

var page = require('webpage').create();
page.open('http://northwestern.libcal.com/booking/mudd_large', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    // Successfully loaded the page
    var firstid = calculateID(year,month,day);
    for(var i=0;i<6;i++){
      var targetid = firstid+i;
      var targetdoc = document.getElementByID(targetid);
    }
    // Finished Running operations
    phantom.exit();
  }
  else{
    console.log("Encountered error, status !=== success");
    phantom.exit();
  }
});
