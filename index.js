 var utils = {
 	slice: function(str, length, symbol) {
 		var result = '',
 			sym = symbol || '...';
 		if (!str || typeof str !== 'string' || !length) {
 			result = str;
 		} else {
 			result = str.slice(0, length) + sym;
 		}

 		return result;
 	},
 	fixNumber: function(num) {
 		if (num < 10) {
 			return '0' + num;
 		} else {
 			return num;
 		}
 	},
 	getDateString: function(str) {
 		var DATE = str ? new Date(str) : new Date(),
 			resultDate = [],
 			resultTime = [];
 		resultDate.push(DATE.getFullYear());
 		resultDate.push(this.fixNumber(DATE.getMonth()));
 		resultDate.push(this.fixNumber(DATE.getDate()));
 		resultTime.push(this.fixNumber(DATE.getHours()));
 		resultTime.push(this.fixNumber(DATE.getMinutes()));
 		resultTime.push(this.fixNumber(DATE.getSeconds()));
 		return resultDate.join('-') + ' ' + resultTime.join(':');
 	},
 	deepCopy: function(source) { //Copey
 		var result = {};
 		if (!source) {
 			return source
 		}
 		if (typeof source !== 'object') {
 			return source;
 		}
 		if (Object.prototype.toString.call(source).slice(8, -1) === 'Array') {
 			result = [];
 			for (var i = 0; i < source.length; i++) {
 				result[i] = utils.deepCopy(source[i]);
 			}
 			return result;
 		}
 		for (var key in source) {
 			//if (source.hasOwnProperty(key)) {
 			result[key] = utils.deepCopy(source[key]);
 			//}

 		}
 		return result;
 	},
 	extend: function(tagert, source, deep) {
 		var subObj = tagert || {};
 		var parentObj = source || {};
 		//parentObj = utils.deepCopy(parentObj);
 		for (var key in parentObj) {
 			subObj[key] = parentObj[key];
 			sdfasd
 		}
 		return subObj;
 	},
 	log: function(obj, type) {
 		var colors = {
 			black: '\033[22;30m',
 			red: '\033[22;31m',
 			green: '\033[22;32m',
 			brown: '\033[22;33m',
 			blue: '\033[22;34m',
 			magenta: '\033[22;35m',
 			cyan: '\033[22;36m',
 			gray: '\033[22;37m',
 			darkGray: '\033[01;30m',
 			lightRed: '\033[01;31m',
 			lightGreen: '\033[01;32m',
 			yellow: '\033[01;33m',
 			lightBlue: '\033[01;34m',
 			lightMagenta: '\033[01;35m',
 			lightCyan: '\033[01;36m',
 			white: '\033[01;37m'
 		};
 		var line = '';
 		var lineArr = [];
 		for (var l = 0; l < 50; l++) {
 			lineArr.push(line);
 		}
 		line = lineArr.join('');
 		var end = '\033[0m';
 		console.log((colors[type] || '') + '\n' + line);
 		console.log(new Date());
 		console.log(obj);
 		console.log('\n' + line + end + '\n');
 	}
 };
 module.exports = utils;