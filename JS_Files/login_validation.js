const email_field = document.getElementById('login_email'),
    password_field = document.getElementById('login_password'),
    warnings_field = document.getElementById('login_warnings'),
    login_form = document.getElementById('login_form');

login_form.addEventListener('submit', e=>{
    e.preventDefault();
    let warnings = "";
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/;
    var errores = false;
    warnings_field.innerHTML = "";
    if(password_field.value.length < 6) {
        warnings += 'La contraseña es muy corta<br>';
        errores = true;
    }
    if(password_regex.text(password_regex)){
        warnings += 'La contraseña es muy corta<br>';
        errores = true;
    }
    if(!email_regex.test(email_field.value)){
        warnings += 'El correo no es valido<br>';
        errores = true;
    }
    if(password_field.value.length > 16) {
        warnings += 'La contraseña es muy larga<br>';
        errores = true;
    }
    if(errores) {
        warnings_field.innerHTML = warnings;
    }
});