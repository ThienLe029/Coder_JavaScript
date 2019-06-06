var co = require('co');
var axios = require('axios');

var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

function readData(path) {
	return axios(path)
}

var readDatas = co.wrap(function*(paths) {
	var values = yield paths.map(function(path) {
		return readData(path);
	});
	return values;
});

readDatas(urls)
	.then(function(res) {
		console.log(res);
	});