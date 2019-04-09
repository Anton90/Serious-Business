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
var currentHour = today.getHours();
var currentMinute = today.getMinutes();
var currentSecond = today.getSeconds();

if (currentHour < 10) {
  currentHour = "0" + currentHour;
}

if (currentMinute < 10) {
  currentMinute = "0" + currentMinute;
}

if (currentSecond < 10) {
  currentSecond = "0" + currentSecond;
}

// var clock = document.getElementById("timeDiv")
// setInterval( 
//   (clock.innerHTML = currentHour + ":" + currentMinute + ":" + currentSecond)
//   ,1000);

var morning1 = document.getElementsByClassName("hoursMorning")[today.getDay() - 1];
var morning2 = document.getElementsByClassName("minutesMorning")[today.getDay() - 1];
var evening1 = document.getElementsByClassName("hoursEvening")[today.getDay() - 1];
var evening2 = document.getElementsByClassName("minutesEvening")[today.getDay() - 1];
var morningHour = parseInt(morning1.innerHTML);
var morningMinutes = parseInt(morning2.innerHTML);
var eveningHour = parseInt(evening1.innerHTML);
var eveningMinutes = parseInt(evening2.innerHTML); 

var message = document.getElementById("timeDiv");
var closeButton = document.getElementsByClassName("btn")[0]; 

closeButton.addEventListener("click", closeEarly);

function closeEarly() {
  evening1.innerHTML = currentHour;
  evening2.innerHTML = currentMinute;
}

if (currentDay != "Sunday") {
  if (currentHour >= morningHour && currentHour < eveningHour) {
    message.innerHTML = "We're open!";
  } else {
  message.innerHTML = "We're closed!";
}
}

