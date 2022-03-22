const singup_overlay = document.getElementById('singup_popup_overlay'),
    singup_popup = document.getElementById('singup_popup');

const singup_open = document.getElementById('open_singup');

singup_open.addEventListener('click', function () {
    singup_overlay.classList.add('singup_active');
    singup_popup.classList.add('singup_active');
});

const singup_close = document.getElementById('btn-cerrar-singup_popup');

singup_close.addEventListener('click', function (e) {
    e.preventDefault();
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
});

const open_login = document.getElementById('open_login');

open_login.addEventListener('click', function () {
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
    const login_overlay = document.getElementById('login_popup_overlay'),
        login_popup = document.getElementById('login_popup');
    login_overlay.classList.add('login_active');
    login_popup.classList.add('login_active');
});

const singup_sin_vision = document.getElementById('singup_sin_vision'),
    singup_vision = document.getElementById('singup_vision');

singup_sin_vision.addEventListener('click', function () {
    singup_sin_vision.classList.remove('singup_activation');
    singup_vision.classList.add('singup_activation');
});

singup_vision.addEventListener('click', function () {
    singup_sin_vision.classList.add('singup_activation');
    singup_vision.classList.remove('singup_activation');
});

const singup_password = document.getElementById('singup_password');

singup_sin_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('singup_activation')) {
        singup_password.type = "text";
    } else {
        singup_password.type = "password";
    }
});

singup_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('singup_activation')) {
        singup_password.type = "text";
    } else {
        singup_password.type = "password";
    }
});
