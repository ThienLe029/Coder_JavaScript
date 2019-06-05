var fs = require('fs');
var readlineSync = require('readline-sync');

var users = [];


contentUsers = fs.readFileSync('./data.json', {encoding: 'utf8'});
users = JSON.parse(contentUsers);
for (var i=0;i<users.length;i++){
	console.log(users[i]);
}




