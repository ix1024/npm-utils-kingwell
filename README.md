### Installation
	$ npm i npm-utils-kingwell
	$ npm i npm-utils-kingwell --save

### Require
	var utils = require('npm-utils-kingwell');

### Interception string
	slice(String);	
	var str = 'abcdefghijklmnopqrstuvwxyz';
	console.log(utils.slice(str,3));//output 'abcd...'
	console.log(utils.slice(str,3,'-'));//output 'abcd-'
	console.log(utils.slice(str,3,'+'));//output 'abcd+'
### Get date string
	getDateString(Date);
	console.log(utils.getDateString(new Date)); //output 2016-08-10 11:32:00

### log
	log(inof,color);
	color === 
			black
			red
			green
			brown
			blue
			magenta
			cyan
			gray
			darkGray
			lightRed
			lightGreen
			yellow
			lightBlue
			lightMagenta
			lightCyan
			white
	
	utils.log('something','red');//color -> red	

![](images/color-demo1.png)