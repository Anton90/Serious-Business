const today = new Date();
const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

const currentDay = weekday[today.getDay()];
const currentHour = today.getHours();
const currentMinute = today.getMinutes();
var morning1 = document.getElementsByClassName("hoursMorning")[today.getDay() - 1];
var morning2 = document.getElementsByClassName("minutesMorning")[today.getDay() - 1];
var evening1 = document.getElementsByClassName("hoursEvening")[today.getDay() - 1];
var evening2 = document.getElementsByClassName("minutesEvening")[today.getDay() - 1];
var morningHour = parseInt(morning1.innerHTML);
var morningMinutes = parseInt(morning2.innerHTML);
var eveningHour = parseInt(evening1.innerHTML);
var eveningMinutes = parseInt(evening2.innerHTML); 

var message = document.getElementById("timeDiv");

if (currentDay != "Sunday") {
  if (morningHour <= currentHour < eveningHour) {
    console.log("We're open");
    message.innerHTML = "We're open!";
  }
} else {
  console.log("We're closed");
  message.innerHTML = "We're open!";

}

