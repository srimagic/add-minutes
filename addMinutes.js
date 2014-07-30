(function(){
	var args = process.argv.slice(),
		timeString = "",
		dayNight = "",
		minutesToAdd = 0,
		hourPart = 0,
		minutePart = 0,
		tmpArray = [],
		init,
		validate,
		compute
		;

    init = function() {
    	console.log('\n>>>entering init');

    	if (args.length < 5) {
			console.log("usage: node addMinutes.js <<time>> <<minutes>>");
			console.log("<<time>> format: [H]H:MM {AM|PM}");
			console.log("<<minutes>> format: 0 to 60");
			console.log("example:- `node addMinutes.js 5:00 PM 20` - should return 5:20 PM");
			process.exit(1);
		}
		timeString = args[2];
		dayNight = args[3];
		minutesToAdd = args[4];
		console.log('>>>init success');
    };

    validate = function() {
    	console.log('\n>>>entering validate');

    	if (!timeString || timeString.indexOf(":") < 0){
			console.log("<<time>> format: [H]H:MM {AM|PM}");
			process.exit(1);
		}

		tmpArray = timeString.split(":");
		hourPart = tmpArray[0];
		minutePart = tmpArray[1];

		if (isNaN(hourPart) || !(hourPart > 0 && hourPart < 13)) {
			console.log("Entered hour part is invalid!!!");
			process.exit(1);
		}

		if (isNaN(minutePart) || !(minutePart > 0 && minutePart < 60)) {
			console.log("Entered minute part invalid!!!");
			process.exit(1);
		}

		if (isNaN(minutesToAdd) || !(minutesToAdd > 0 && minutesToAdd < 60)) {
			console.log("Entered minutes to add is invalid!!!");
			process.exit(1);
		}

		if (!dayNight || (dayNight !== "AM" && dayNight!== "PM")) {
			console.log("Invalid AM/PM!!!");
			process.exit(1);
		}

		hourPart = parseInt(hourPart);
		minutePart = parseInt(minutePart);
		minutesToAdd = parseInt(minutesToAdd);

		console.log('>>>validate success');
    };

    compute = function() {
    	var oldHourPart = hourPart;

    	console.log('\n>>>entering compute');
    	
    	hourPart = hourPart + Math.floor((minutePart + minutesToAdd)/60);
    	if (hourPart == 12 && hourPart !== oldHourPart) {
    		dayNight = (dayNight === "AM") ? "PM" : "AM";
    	}
    	hourPart = hourPart % 13;
    	minutePart = (minutePart + minutesToAdd) % 60;

    	console.log('>>>compute success');

        return {
        	hour: (hourPart < 10) ? 0 + hourPart.toString() : hourPart.toString(),
        	minute: (minutePart < 10) ? 0 + minutePart.toString() : minutePart.toString(),
        	dayNight: dayNight
        }
    };

    init();
    validate();
    var new_time = compute();
    console.log("returned time = ", new_time.hour, ":", new_time.minute, " ", new_time.dayNight);
})();
