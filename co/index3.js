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

co(function*() {

	for (var url of urls) {
		var values = yield readData(url);
		console.log(values);
	}
})