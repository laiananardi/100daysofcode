const btn = document.getElementById('register');
const name = document.getElementById('name');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const gender = document.getElementsByName('gender');
const city = document.getElementById('city');

document.addEventListener('DOMContentLoaded', start);

function start() {
	btn.onclick = validate; 
}

function validate() {

  var errorMessages = [];
  
	if(!name.value) {
    errorMessages.push('Por favor, insira um nome!');
	}
	if(!password1.value) {
		errorMessages.push('Por favor, insira uma senha!');
	}
	if(!password2.value) {
		errorMessages.push('Por favor, confirme sua senha!');
	}
	if(password1.value && password2.value) {
		if(password1.value != password2.value) {
			errorMessages.push('As senhas não coincidem!');
		}
	}
	var isChecked = false;
	for(var i=0; i < gender.length; i++) {
		if(gender[i].checked) {
			isChecked = true; 
			break; 
		}
	}
	if(!isChecked) {
		errorMessages.push('Por favor, selecione um sexo.');
	}
  if(!city.value) {
      errorMessages.push('Por favor, selecione uma cidadde.');
  }


  // Show error messages  

	if(!errorMessages.length) {
		errorSec.innerHTML = '';
    return false;
	}

  var errorSec = document.getElementById('error');
  var ul = document.getElementById('error-ul');

	var elements = [];

	for(var i=0; i<errorMessages.length; i++) {
		elements += '<li>' + errorMessages[i] + '</li>';
	}
  ul.innerHTML = elements
  
	if(errorMessages.length) {
		return false;
	}  
}
