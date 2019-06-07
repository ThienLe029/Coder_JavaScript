function doAfter(doFunction,x) {
  return new Promise(function(resolve,reject) {
  	setTimeout(function(){
  		doFunction();
  		resolve()
  	},x);
  });
}
function sayHello() {
  console.log('Hello');
}

function sayGoodbye(result) {
  console.log('Goodbye');
}

doAfter(sayHello, 1000).then(sayGoodbye);