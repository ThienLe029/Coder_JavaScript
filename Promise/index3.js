var axios = require('axios');

function getContent(path) {
	axios.get(path)
		.then(function (response) {
	    console.log(response.data);
	  })
	  	.catch(function (error) {
	    console.log(error);
	  })
	  	.finally(function () {
    
  	  });
}
Promise.all([
	getContent('https://jsonplaceholder.typicode.com/todos/1'),
	getContent('https://jsonplaceholder.typicode.com/todos/2'),
	getContent('https://jsonplaceholder.typicode.com/todos/3')
]).then(function(response) {
	 console.log(response);
}).catch(function(err) {
	 console.log(err);
});