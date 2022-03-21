var singup_open = document.getElementById('open_singup'),
    login_open = document.getElementById('open_login'),
    singup_overlay = document.getElementById('singup_popup_overlay'),
    singup_popup = document.getElementById('singup_popup'),
    singup_close = document.getElementById('btn-cerrar-singup_popup'),
    singup_vision = document.getElementById('singup_vision'),
    singup_sin_vision = document.getElementById('singup_sin_vision'),
    singup_password = document.getElementById('singup_password');

singup_open.addEventListener('click', function () {
    singup_overlay.classList.add('singup_active');
    singup_popup.classList.add('singup_active');
});

login_open.addEventListener('click', function () {
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
});

singup_close.addEventListener('click', function (e) {
    e.preventDefault();
    singup_overlay.classList.remove('singup_active');
    singup_popup.classList.remove('singup_active');
});

singup_vision.addEventListener('click', function () {
    singup_vision.classList.remove('login_activation');
    singup_sin_vision.classList.add('login_activation');
});

singup_sin_vision.addEventListener('click', function () {
    singup_sin_vision.classList.remove('login_activation');
    singup_vision.classList.add('login_activation');
});

singup_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('login_activation')) {
        singup_password.type = "text";
    } else {
        singup_password.type = "password";
    }
});

singup_sin_vision.addEventListener('click', function () {
    if (singup_vision.classList.contains('login_activation')) {
        singup_password.type = "text";
    } else {
        singup_password.type = "password";
    }
});