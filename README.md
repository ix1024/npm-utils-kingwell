### Installation
	$ npm i npm-utils-kingwell
	$ npm i npm-utils-kingwell --save

### Require
	var utils = require('npm-utils-kingwell');

### log
	log(info,color);
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

### Interception string
	slice(String);	
	var str = 'abcdefghijklmnopqrstuvwxyz';
	console.log(utils.slice(str,3));//output 'abcd...'
	console.log(utils.slice(str,3,'-'));//output 'abcd-'
	console.log(utils.slice(str,3,'+'));//output 'abcd+'

### Get date string
	getDateString(Date);
	console.log(utils.getDateString(new Date)); //output 2016-08-10 11:32:00
### toDenseArray
	var arr = [1,2,3,'',4];
	utils.toDenseArray(arr) //output [1,2,3,4]
### delArray
	var arr = [1,2,2,3,3,3,3,4];
	utils.delArray(arr); //output [1,2,3,4]
### inArray
	var arr = ['a','b','c']
	utils.inArray(b,arr); //output 1
### strimHtml
	var str = '<div>html</div>';
	utils.strimHtml(str);//output html;
