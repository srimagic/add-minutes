describe("add minutes test suite", function(){
	var addMinutes;

	beforeEach(function(){
		addMinutes = require('../addMinutes');
	});

	it("pass_hour_1", function(){	
		var new_time = addMinutes("11:40", "AM", 20);
		expect(new_time.hour).toBe("12");
	});

	it("pass_minute_1", function(){	
		var new_time = addMinutes("2:01", "AM", 20);
		expect(new_time.minute).toBe("21");
	});

	it("pass_dayNight_1", function(){	
		var new_time = addMinutes("11:20", "AM", 40);
		expect(new_time.dayNight).toBe("PM");
	});

	it("fail_hour_1", function(){	
		var new_time = addMinutes("11:20", "AM", 40);
		expect(new_time.hour).toBe("1");
	});

	it("fail_minute_2", function(){	
		var new_time = addMinutes("11:20", "AM", 40);
		expect(new_time.minute).toBe("59");
	});

	it("fail_dayNight_1", function(){	
		var new_time = addMinutes("1:10", "AM", 40);
		expect(new_time.dayNight).toBe("PM");
	});

	afterEach(function(){
		addMinutes = null;
	});
});
