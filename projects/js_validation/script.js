const btn = document.getElementById('submit')
const name = document.getElementById('name');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const gender = document.getElementsByName('gender');
const city = document.getElementById('city');

const error_name = document.getElementById('error-name');
const error_password1 = document.getElementById('error-password1');
const error_password2 = document.getElementById('error-password2');
const error_gender = document.getElementById('error-gender');
const error_city = document.getElementById('error-city');

var error = [];

function validateName() {
	if (!name.value) {
		 error_name.innerHTML = `<p>Por favor, insira um nome!</p>`;
	}
	else {
		 error_name.innerHTML = ``;
		 return true;
	}

}

function validatePassword1() {

	if (!password1.value) {
		error_password1.innerHTML = `<p>Por favor, insira uma senha!</p>`
	} else {
		error_password1.innerHTML = ``

	}
	validatePassword();
}

function validatePassword2() {
	if (!password2.value) {
		error_password2.innerHTML = `<p>Por favor, confirme sua senha!</p>`
	} else {
		error_password2.innerHTML = ``

	}
	validatePassword();

}

function validatePassword() {
	if (password1.value && password2.value) {
		if (password1.value != password2.value) {
			
			 error_password2.innerHTML = `<p>As senhas não coincidem!</p>`;
		}
		return true;
	
	}
}

function validateChecked() {
	var isChecked = false;
	for (var i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			isChecked = true;
			break;
		}
	}
	if (!isChecked) {
		error_gender.innerHTML = `<p>Por favor, selecione um sexo.</p>`
	
	} else {
		error_gender.innerHTML = ``
	}

	validateCity();



}
function validateCity() {
	if (!city.value) {
		 error_city.innerHTML = `<p>Por favor, selecione uma cidadde.</p>`
	} else {
		error_city.innerHTML = ``
		return true;
		
	}

}

function validate(){
	validateName();
	validatePassword1();
	validatePassword2();
	validateChecked();
	console.log(validateName())
	console.log(validatePassword())
	console.log(validateCity())

	if(validateName() && validatePassword() && validateCity() === true){
		btn.style.display = "flex";
	}
}



btn.onclick = function submit() {

	window.alert('Registro concluido com sucesso');
	return true;
}

