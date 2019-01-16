var num1 = parseInt(prompt("Enter First Number:"));
var num2 = parseInt(prompt("Enter Second Number:"));

var add = function(one, two){
	return num1 + num2;
}

var subtract = function(one, two){
	return num1 - num2;
}

var multiply = function(one, two){
	return num1 * num2;
}

var divide = function(one, two){
	return num1 / num2;
}

var result = add(num1 + num2)
alert(result);
