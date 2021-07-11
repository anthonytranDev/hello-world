'use strict';

var defaultText = 'Hello World!';
var InputField;
var Form;
var text;
window.onload = function () {
	InputField = document.getElementById('echo-input');
	Form = document.getElementById('form');

	InputField.setAttribute('value', defaultText);

	InputField.addEventListener('change', function (event) {
		text = event.target.value;
	});

	Form.addEventListener('submit', function (event) {
		event.preventDefault();
	});
};
