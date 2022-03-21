var login_open = document.getElementById('user_profile'),
    login_overlay = document.getElementById('login_popup_overlay'),
    login_popup = document.getElementById('login_popup'),
    login_close = document.getElementById('btn-cerrar-login_popup'),
    login_vision = document.getElementById('vision'),
    login_sin_vision = document.getElementById('sin_vision'),
    login_password = document.getElementById('login_password');

login_open.addEventListener('click', function () {
    login_overlay.classList.add('login_active');
    login_popup.classList.add('login_active');
});

login_close.addEventListener('click', function (e) {
    e.preventDefault();
    login_overlay.classList.remove('login_active');
    login_popup.classList.remove('login_active');
});

login_sin_vision.addEventListener('click', function (){
    login_sin_vision.classList.remove('activation');
    login_vision.classList.add('activation');
});

login_vision.addEventListener('click', function (){
    login_vision.classList.remove('activation');
    login_sin_vision.classList.add('activation');
});

login_vision.addEventListener('click', function() {
    if (login_vision.classList.contains('activation')) {
        login_password.type = "text";
    } else {
        login_password.type = "password";
    }
});

login_sin_vision.addEventListener('click', function() {
    if (login_vision.classList.contains('activation')) {
        login_password.type = "text";
    } else {
        login_password.type = "password";
    }
});