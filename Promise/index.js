var fs = require('promise-fs');

function onDone(text) {
	console.log(text);
}

function onError(error) {
	console.log(error);
}

function readFile(path) {
	return fs.readFile(path, {encoding: 'utf8'})
}

readFile('text1.txt')
	.then(onDone)
	readFile('text2.txt')
	.then(onDone)
	.catch(onError)

var request = require('request');

console.log('Start fetching...');

request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
  if (error !== null) {
    console.log('error:', error); // Print the error
  }
  console.log('Done:', body);
});

console.log('Nothing');