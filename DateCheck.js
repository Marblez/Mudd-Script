var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var date1 = new Date("9/20/2017");
var date2 = new Date(month + "/" + day + "/" + year);
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
console.log(diffDays);
