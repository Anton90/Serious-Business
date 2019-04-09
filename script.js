var today = new Date();
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

var currentDay = weekday[today.getDay()];
var time = today.getHours() + ":" + today.getMinutes();
console.log(time);
console.log(currentDay);