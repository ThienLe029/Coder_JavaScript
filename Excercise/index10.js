function nearestTo100(a, b){
	var num1 = Math.abs(a-100);
	var num2 = Math.abs(b-100);
	return num1<num2?a:b;
}
//console.log(nearestTo100(200,90));

function checkInt(number1, number2) {
	if ((number1 > 0 && number2 < 0) || (number1 < 0 && number2 > 0)) {
		return true;
	} else {
		return false;
	}
}

function difference(n) {
	if (n > 13) {
		return 2*Math.abs(n-13);
	} else {
		return Math.abs(n-13);
	}
}

function pyString(String) {
	// Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
  // Tham số:
  // - String: chuỗi nhập vào lúc đầu.
  if (String.indexOf('Py') < 0) {
  	return 'Py' + String;
  } else {
  	return String;
  }
  
}

function toNextChar(str) {
	// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
  // Tham số:
  // - String: chuỗi nhập vào ban đầu.
  var newStr = "";
  for (var i=0;i<str.length;i++) {
 	var charCode = str[i].charCodeAt() + 1;
 	newStr = newStr + String.fromCharCode(charCode);
  }
  return newStr;
}

function newString(str, n){
	return str.substr(0,n) + str.substr(str.length-n)
}

str = '123456789987'

console.log(newString(str, 2));
