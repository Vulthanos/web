var login_open = document.getElementById('user_profile'),
    login_overlay = document.getElementById('login_popup_overlay'),
    login_popup = document.getElementById('login_popup'),
    login_close = document.getElementById('btn-cerrar-login_popup');

login_open.addEventListener('click', function () {
    login_overlay.classList.add('login_active');
    login_popup.classList.add('login_active');
});

login_close.addEventListener('click', function (e) {
    e.preventDefault();
    login_overlay.classList.remove('login_active');
    login_popup.classList.remove('login_active');
});