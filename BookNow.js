// STANDARD FUNCTION RUN //
var totalhours = 3;
var totalboxes = totalhours * 2;
console.log("Welcome to Mudd Library 'Large Study Room' Automatic Reservation");
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
console.log("Today's date: " + month + "/" + day + "/" + year);

var page = require('webpage').create();

page.open('http://northwestern.libcal.com/booking/mudd_large', function(status) {
  if (status === "success") {
    page.render('renderfirst.pdf', {
      format: 'pdf',
      quality: '100'
    });
    console.log("Status: " + status);

    // Successfully loaded the page
    // Calculate ID with algorithm
    // Automatically clicks all elements required
    console.log("Beginning to select elements");

    page.evaluate(function() {

      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();

      var calculateID = function(year, month, day) {
        // Algorithm that calculates elementID of needed squares to click
        // ALGORITHM GOES HERE
        var date1 = new Date("9/20/2017");
        var date2 = new Date(month + "/" + day + "/" + year);
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        console.log(diffDays);
        var dscrp = 581974123 + (diffDays * 480);
        // ALGORITHM DONE RUNNING

        console.log("Successfully calculated ID value");
        return dscrp;
      };

      var firstid = calculateID(year, month, day);
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0);
      try{
      document.getElementById(firstid).dispatchEvent(event);
    }
    catch(ex){
      console.log("Space already taken");
    }
    });


          page.evaluate(function() {

          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();

          var calculateID = function(year, month, day) {
            // Algorithm that calculates elementID of needed squares to click
            // ALGORITHM GOES HERE
            var date1 = new Date("9/20/2017");
            var date2 = new Date(month+"/"+day+"/"+year);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);
            var dscrp = 581974124+(diffDays*480);
            // ALGORITHM DONE RUNNING

            console.log("Successfully calculated ID value");
            return dscrp;
          };

          var firstid = calculateID(year, month, day);
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0);
          try{
          document.getElementById(firstid).dispatchEvent(event);
        }
        catch(ex){
          console.log("Space already taken");
        }

          });

          page.evaluate(function() {
          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();

          var calculateID = function(year, month, day) {
            // Algorithm that calculates elementID of needed squares to click
            // ALGORITHM GOES HERE
            var date1 = new Date("9/20/2017");
            var date2 = new Date(month+"/"+day+"/"+year);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);
            var dscrp = 581974125+(diffDays*480);
            // ALGORITHM DONE RUNNING

            console.log("Successfully calculated ID value");
            return dscrp;
          };

          var firstid = calculateID(year, month, day);
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0);
          try{
          document.getElementById(firstid).dispatchEvent(event);
        }
        catch(ex){
          console.log("Space already taken");
        }
          });

          page.evaluate(function() {

          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();

          var calculateID = function(year, month, day) {
            // Algorithm that calculates elementID of needed squares to click
            // ALGORITHM GOES HERE
            var date1 = new Date("9/20/2017");
            var date2 = new Date(month+"/"+day+"/"+year);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);
            var dscrp = 581974126+(diffDays*480);
            // ALGORITHM DONE RUNNING

            console.log("Successfully calculated ID value");
            return dscrp;
          };

          var firstid = calculateID(year, month, day);
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0);
          try{
          document.getElementById(firstid).dispatchEvent(event);
        }
        catch(ex){
          console.log("Space already taken");
        }
          });

          page.evaluate(function() {
          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();

          var calculateID = function(year, month, day) {
            // Algorithm that calculates elementID of needed squares to click
            // ALGORITHM GOES HERE
            var date1 = new Date("9/20/2017");
            var date2 = new Date(month+"/"+day+"/"+year);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);
            var dscrp = 581974127+(diffDays*480);
            // ALGORITHM DONE RUNNING

            console.log("Successfully calculated ID value");
            return dscrp;
          };

          var firstid = calculateID(year, month, day);
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0);
          try{
          document.getElementById(firstid).dispatchEvent(event);
        }
        catch(ex){
          console.log("Space already taken");
        }
          });

          page.evaluate(function() {
          var today = new Date();
          var year = today.getFullYear();
          var month = today.getMonth() + 1;
          var day = today.getDate();

          var calculateID = function(year, month, day) {
            // Algorithm that calculates elementID of needed squares to click
            // ALGORITHM GOES HERE
            var date1 = new Date("9/20/2017");
            var date2 = new Date(month+"/"+day+"/"+year);
            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
            console.log(diffDays);
            var dscrp = 581974128+(diffDays*480);
            // ALGORITHM DONE RUNNING

            console.log("Successfully calculated ID value");
            return dscrp;
          };

          var firstid = calculateID(year, month, day);
          var event = document.createEvent('MouseEvents');
          event.initMouseEvent('click', true, true, window, 1, 0, 0);
          try{
          document.getElementById(firstid).dispatchEvent(event);
        }
        catch(ex){
          console.log("Space already taken");
        }
          });



    console.log("Successfully selected elements");
    //Submits form

    page.evaluate(function() {
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0);
      document.getElementById("rm_tc_cont").dispatchEvent(event);
    });

    // FILL OUT INFORMATION PAGE
    console.log("Filling out information...");

    page.evaluate(function() {
      var firstname = "Matthew";
      var lastname = "Wang";
      var email = "MatthewWang2020@U.northwestern.edu";
      document.getElementById("fname").value = firstname;
      document.getElementById("lname").value = lastname;
      document.getElementById("email").value = email;
      document.getElementById('q1').value = 'Undergraduate student';
    });
    //Renders image of the website (Testing purposes)
    page.render('renderimage.pdf', {
      format: 'pdf',
      quality: '100'
    });

    console.log("Filled out all information, submitting reservation...");
    // Finished Running operations
    /*  page.evaluate(function() {

        var event = document.createEvent('MouseEvents');
        event.initMouseEvent('click', true, true, window, 1, 0, 0);
        document.getElementById("s-lc-rm-sub").dispatchEvent(event);

        var subbutton = document.getElementById("s-lc-rm-sub");
        console.log(document.getElementById("s-lc-rm-sub").innerHTML);
        subbutton.submit();
      }); */

    page.evaluate(function() {
      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, true, window, 1, 0, 0);
      document.getElementById("s-lc-rm-sub").dispatchEvent(event);
    });
    console.log("Completed Reservation. Expect an email soon!");
    page.render('renderlast.pdf');
    phantom.exit();
  } else {
    console.log("Encountered error, status !=== success");
    phantom.exit();
  }

});
