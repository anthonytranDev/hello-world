'use strict';

var defaultText = 'Hello World!';
var InputField;
var text;
window.onload = function () {
	InputField = document.getElementById('echo-input');
	InputField.setAttribute('value', defaultText);

	InputField.addEventListener('change', function (event) {
		text = event.target.value;
	});
};
