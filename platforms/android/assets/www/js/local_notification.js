var now = new Date().getTime(),
_5_seconds_from_now = new Date(now + 5*1000);
var counter = 0 

function localNotify(){
	counter = counter + 1;
	window.plugin.notification.local.add({
	    id:         counter,  // A unique id of the notifiction
	    date:       _5_seconds_from_now,    // This expects a date object
	    message:    "Loan Approved :)",  // The message that is displayed
	    title:      "Welend",  // The title of the message
	    badge:      4,  // Displays number badge to notification
	});
}