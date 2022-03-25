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
    console.log('Formulario Enviado');

    let errores = "";
    var error = false;
    if (login_email.value.length === 0) {
        errores += 'El correo no puede estar vacío<br>'
        error = true;
    }
    if (login_password.value.length === 0) {
        errores += 'La contraseña no puede estar vacía<br>'
        error = true;
    }
    if(error) {
        login_warnings.innerHTML = errores;
    }
    return false;
}