var co = require('co');
var fs = require('fs');

function readFilePromise(path) {
	return new Promise(function(resolve,reject) {
		fs.readFile(path, {encoding: 'utf8'}, function(err,data) {
			if(err) {
				reject(err);
			} else {
				resolve(data);
			}
		});

	})
}

co(function*() {
	//var test1 = yield readFilePromise('./text1.txt');
	//var test2 = yield readFilePromise('./text2.txt');
	var values = yield [
		readFilePromise('./text1.txt'),
		readFilePromise('./text2.txt')
	]
	return values
}).then(function(values) {
	console.log(values);
}).catch(function(err) {
	console.log(err);
})

var readFiles = co.wrap(function*(files) {
	var values = yield files.map(function(file) {
		return readFilePromise(file);
	});
	return values;
});
readFiles(['text1.txt','text2.txt'])
	.then(function(values) {
		console.log(values);
	})