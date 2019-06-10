var path = require('path');

function getExtensionFilename(filename) {
	return path.extname(filename).slice(1);
}

var result = getExtensionFilename('JavHD.mp4');
console.log(result);