//Get HTML references to clock hands.
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");


//Calculate degree changes for each second. How many seconds does it take for each hand to rotate a full 360 degrees?
var secondDeg = 360 / 60;
var minuteDeg = 360 / (60 * 60);
var hourDeg = 360 / (60 * 60 * 12);


//Calculate and store current positions of clock hands. Translate current minutes, hours into seconds.
//Then multiply # of seconds already passed by the degree change per second.
var myDate = new Date();s
var currSecondPos = myDate.getSeconds() * secondDeg;
var currMinutePos = ((myDate.getMinutes() * 60) + myDate.getSeconds()) * minuteDeg;
var currHourPos = ((myDate.getHours() * 60 * 60) + (myDate.getMinutes() * 60) + myDate.getSeconds()) * hourDeg;


//Set starting positions for clock hands based on values calculated above.
secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
hourHand.style.transform = "rotate(" + currHourPos + "deg)";


//Define increment functions for each clock hand.
function incrementSecond() {
	currSecondPos += secondDeg;
	secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
}
function incrementMinute() {
	currMinutePos += minuteDeg;
	minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
}
function incrementHour() {
	currHourPos += hourDeg;
	hourHand.style.transform = "rotate(" + currHourPos + "deg)";
}


//Set intervals to increment each hand every second.
var secondInterval = setInterval(incrementSecond, 1000);
var minuteInterval = setInterval(incrementMinute, 1000);
var hourInterval = setInterval(incrementHour, 1000);

