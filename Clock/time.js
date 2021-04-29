window.onload = start();

var hours, minutes, seconds;

function start() {
	hours = document.getElementsByName("hours");
	minutes = document.getElementsByName("minutes");
	seconds = document.getElementsByName("seconds");
	const date = new Date();
	updateClock(date);
	setInterval(updateClock, 1000);
}

function updateClock(date = null) {
	if (typeof date !== null) {
		date = new Date();
	}
	if (String(date.getHours()).length == 1) {
		hours[0].innerHTML = "0";
		hours[1].innerHTML = String(date.getHours())[0];
	} else {
		hours[0].innerHTML = String(date.getHours())[0];
		hours[1].innerHTML = String(date.getHours())[1];
	}
	if (String(date.getMinutes()).length == 1) {
		minutes[0].innerHTML = "0";
		minutes[1].innerHTML = String(date.getMinutes())[0];
	} else {
		minutes[0].innerHTML = String(date.getMinutes())[0];
		minutes[1].innerHTML = String(date.getMinutes())[1];
	}
	if (String(date.getSeconds()).length == 1) {
		seconds[0].innerHTML = "0";
		seconds[1].innerHTML = String(date.getSeconds())[0];
	} else {
		seconds[0].innerHTML = String(date.getSeconds())[0];
		seconds[1].innerHTML = String(date.getSeconds())[1];
	}
}
