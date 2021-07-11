'use strict';

var defaultText = 'Hello World!';
var InputField;
var Form;

function handleChange(event) {
	text = event.target.value;
}

function handleSubmit(event) {
	event.preventDefault();
}

window.onload = function () {
	InputField = document.getElementById('echo-input');
	Form = document.getElementById('form');

	InputField.setAttribute('value', defaultText);

	InputField.addEventListener('change', handleChange);

	Form.addEventListener('submit', handleSubmit);
};
