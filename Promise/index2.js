var request = require('request');

function onDone(body) {
	console.log('Done: ',body);
}

function onError(error) {
	console.log('Error', error);
}

function load(path) {
	return new Promise(function(resolve, reject) {
		request(path, function(err, response, body) {
			if(err) {
				reject(err);
			} else {
				resolve(body);
			}
		})
	})
	
};

load('https://jsonplaceholder.typicode.com/todos/1')
	.then(onDone)
	.catch(onError)