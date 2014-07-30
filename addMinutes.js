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

    	var oldHourPart = hourPart,
    		new_time;

    	console.log('\n>>>entering compute');
    	
    	hourPart = hourPart + Math.floor((minutePart + minutesToAdd)/60);
    	if (hourPart == 12 && hourPart !== oldHourPart) {
    		dayNight = (dayNight === "AM") ? "PM" : "AM";
    	}
    	hourPart = hourPart % 13;
    	minutePart = (minutePart + minutesToAdd) % 60;

    	new_time = {
        	hour: (hourPart < 10) ? 0 + hourPart.toString() : hourPart.toString(),
        	minute: (minutePart < 10) ? 0 + minutePart.toString() : minutePart.toString(),
        	dayNight: dayNight
        };

        console.log("returned time = ", new_time.hour, ":", new_time.minute, " ", new_time.dayNight);
    	console.log('>>>compute success');

        return new_time
    };


    module.exports = function(_timeString, _dayNight, _minutesToAdd){
    	timeString = _timeString;
    	dayNight = _dayNight;
    	minutesToAdd = _minutesToAdd;

    	validate();
    	return compute();
    };
})();
