var axios = require('axios');

axios('https://jsonplaceholder.typicode.com/todos/1')
	.then(function(response) {
		console.log(response.data);
	})
	.catch(function(error) {
		console.log(error);
	})
