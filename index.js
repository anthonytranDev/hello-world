'use strict';

var text;

function handleChange(event) {
	text = event.target.value;
}

function handleSubmit(event) {
	event.preventDefault();
}


window.onload = function () {
	var Form = document.getElementById('form');
			Form.onsubmit = handleSubmit;

	var InputField = document.getElementById('input');
			InputField.onchange = handleChange;
};
