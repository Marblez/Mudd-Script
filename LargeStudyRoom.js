// CONFIGURE USER INFORMATION HERE:
var firstname = "Matthew";
var lastname = "Wang";
var email = "MatthewWang2020@U.northwestern.edu";

// INFORMATION:
// Required Javascript libraries: PhantomJS, NodeCron

// Script begins //


console.log("Welcome to Mudd Library 'Large Study Room' Automatic Reservation");
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth()+1;
var day =today.getDate();
console.log("Today's date: "+month+"/"+day+"/"+year);

var calculateID = function(year,month,day){
// Algorithm that calculates elementID of needed squares to click
return 0;
};

var page = require('webpage').create();
page.open('http://northwestern.libcal.com/booking/mudd_large', function(status) {
  console.log("Status: " + status);
  if(status === "success") {
    // Successfully loaded the page
    // Calculate ID with algorithm
    var firstid = calculateID(year,month,day);
    // Automatically clicks all elements required
    for(var i=0;i<6;i++){
      var targetid = firstid+i;
      var targetdoc = document.getElementByID(targetid);
      targetdoc.click();
    }
    console.log("Successfully selected elements");
    //Submits form
    var cont = document.getElementById("rm_tc_cont");
    cont.click();

    // FILL OUT INFORMATION PAGE
    console.log("Filling out information...");
    document.getElementById("fname").value=firstname;
    document.getElementById("lname").value=lastname;
    document.getElementById("email").value = email;
    document.getElementById('q1').value='Undergraduate student';
    console.log("Filled out all information, submitting reservation...")
    // Finished Running operations
    var submit = document.getElementById("s-lc-rm-sub");
    submit.click();
    console.log("Completed Reservation. Expect an email soon!");
    phantom.exit();
  }
  else{
    console.log("Encountered error, status !=== success");
    phantom.exit();
  }
});
