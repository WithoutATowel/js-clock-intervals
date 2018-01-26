//Get HTML references to clock hands.
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");


//Calculate degree changes for each second. How many seconds does it take for each hand to rotate a full 360 degrees?
var secondDeg = 360 / 60;
var minuteDeg = 360 / (60 * 60);
var hourDeg = 360 / (60 * 60 * 12);


//Calculate and store current positions of clock hands. Translate current minutes, hours into seconds.
//Then multiply # of seconds already passed by the degree change per second per hand.
var myDate = new Date();
var currSecondPos = myDate.getSeconds() * secondDeg;
var currMinutePos = ((myDate.getMinutes() * 60) + myDate.getSeconds()) * minuteDeg;
var currHourPos = ((myDate.getHours() * 60 * 60) + (myDate.getMinutes() * 60) + myDate.getSeconds()) * hourDeg;


//Set starting positions for clock hands based on values calculated above.
secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
hourHand.style.transform = "rotate(" + currHourPos + "deg)";


//Define increment functions for each clock hand.
function increment() {
	currSecondPos += secondDeg;
	currMinutePos += minuteDeg;
	currHourPos += hourDeg;
	secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
	minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
	hourHand.style.transform = "rotate(" + currHourPos + "deg)";
}


//Set interval to call increment and move each hand every second.
var myInterval = setInterval(increment, 1000);

