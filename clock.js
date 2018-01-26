// (1) Get HTML references to clock hands, (2) declare position variables, (3) Calculate degree 
// changes for each hand per second.
var secondHand = document.getElementById("second");
var minuteHand = document.getElementById("minute");
var hourHand = document.getElementById("hour");
var currSecondPos;
var currMinutePos;
var currHourPos;
var secondDeg = 360 / 60;
var minuteDeg = 360 / (60 * 60);
var hourDeg = 360 / (60 * 60 * 12);

function setTime () {
	// Calculate correct positions of clock hands using the Date() object. 
	var now = new Date();
	currSecondPos = now.getSeconds() * secondDeg;
	currMinutePos = ((now.getMinutes() * 60) + now.getSeconds()) * minuteDeg;
	currHourPos = ((now.getHours() * 60 * 60) + (now.getMinutes() * 60) + now.getSeconds()) * hourDeg;
	
	// Set starting positions for clock hands based on values calculated above.
	secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
	minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
	hourHand.style.transform = "rotate(" + currHourPos + "deg)";
}

// Define increment functions for each clock hand.
function increment() {
	currSecondPos += secondDeg;
	currMinutePos += minuteDeg;
	currHourPos += hourDeg;
	secondHand.style.transform = "rotate(" + currSecondPos + "deg)";
	minuteHand.style.transform = "rotate(" + currMinutePos + "deg)";
	hourHand.style.transform = "rotate(" + currHourPos + "deg)";
}

setTime();
// Set interval to call increment and move each hand every second.
var incrementInterval = setInterval(increment, 1000);
var resetInterval = setInterval(setTime, 1000000);