README

usage command line:
	npm install
	node app.js <<time>> <<minutes>>
	example:- `node app.js 5:00 PM 20` - should return 5:20 PM

test:
	npm install
	./test.sh -- sets up test env
	jasmine-node spec

history:
    07/29/2014:
      initial dev

	07/30/2014:
	  added app.js - driver program for addMinutes.js from command line
	  included node jasmine for unit testing code
	  updated package.json to include node jasmine as dependency
	  test.sh - sets up PATH for node jasmine to run. Alternatively you can run `/node_modules/.bin/jasmine-node spec` to run test scripts
	  added spec folder to contain test scripts
	  added spec/addMinutes-spec.js with 3 pass and 3 fail cases
	  moved init logic for command args to app.js from addMinutes.js
