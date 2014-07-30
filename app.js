var addMinutes = require('./addMinutes');
    args = process.argv.slice(),
    start = function() {
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

		addMinutes(timeString, dayNight, minutesToAdd);
    };


    start();


