const login_overlay = document.getElementById('login_popup_overlay'),
    login_popup = document.getElementById('login_popup');

const login_open = document.getElementById('user_profile');

login_open.addEventListener('click', function () {
    login_overlay.classList.add('login_active');
    login_popup.classList.add('login_active');
});

const login_close = document.getElementById('btn-cerrar-login_popup');

login_close.addEventListener('click', function (e) {
    e.preventDefault();
    login_overlay.classList.remove('login_active');
    login_popup.classList.remove('login_active');
});

const open_singup = document.getElementById('open_singup');

open_singup.addEventListener('click', function () {
    login_overlay.classList.remove('login_active');
    login_popup.classList.remove('login_active');
});
const login_vision = document.getElementById('login_vision'),
    login_sin_vision = document.getElementById('login_sin_vision');

login_sin_vision.addEventListener('click', function () {
    login_sin_vision.classList.remove('login_activation');
    login_vision.classList.add('login_activation');
});

login_vision.addEventListener('click', function () {
    login_sin_vision.classList.add('login_activation');
    login_vision.classList.remove('login_activation');
});

const login_password = document.getElementById('login_password');

login_sin_vision.addEventListener('click', function () {
    if(login_vision.classList.contains('login_activation')) {
        login_password.type = "text";
    } else {
        login_password.type = "password";
    }
});

login_vision.addEventListener('click', function () {
    if(login_vision.classList.contains('login_activation')) {
        login_password.type = "text";
    } else {
        login_password.type = "password";
    }
});

var login_warnings = document.getElementById('login_warnings');
var login_email = document.getElementById('login_email');

function formSubmit() {
    login_warnings.innerHTML = "";
    let errores = "";
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
    var error = false;
    if (login_email.value.length === 0) {
        errores += 'El correo no puede estar vacío<br>'
        error = true;
    }
    if (login_password.value.length === 0) {
        errores += 'La contraseña no puede estar vacía<br>'
        error = true;
    }
    if (login_password.value.length < 6 || login_password.value.length > 16) {
        errores += 'La contraseña debe tener más de 6 caracteres y menos de 16<br>'
        error = true;
    }
    if (!email_regex.test(login_email.value)) {
        errores += 'El correo es incorrecto<br>'
        error = true;
    }
    if (!password_regex.test(login_password.value)) {
        errores += 'La contraseña debe tener al menos un digito, una minuscula y una mayuscula<br>'
        error = true;
    }
    if(error) {
        login_warnings.innerHTML = errores;
        return false;
    } else {
        return true;
    }
}