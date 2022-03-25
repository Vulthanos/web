const name_field = document.getElementById('name-field'),
    surname_field = document.getElementById('surname-field'),
    email_field = document.getElementById('email-field'),
    password_field = document.getElementById('singup_password'),
    repit_password_field = document.getElementById('singup_repit_password'),
    terms_field = document.getElementById('selector'),
    warnings_field = document.getElementById('singup_warnings'),
    singup_form = document.getElementById('singup_form');

singup_form.addEventListener('submit', e=>{
    e.preventDefault();
    let warnings = "";
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_regex = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,16}$/;
    let name_surname_regex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    let errores = false;

    if (!name_surname_regex.test(name_field.value)) {
        warnings += 'El nombre introducido no es correcto<br>';
        errores = true;
    }
    if (!name_surname_regex.test(surname_field.value)) {
        warnings += 'Los apellidos introducidos no son correctos<br>';
        errores = true;
    }
    if (!email_regex.test(email_field.value)) {
        warnings += 'El correo es incorrecto<br>';
        errores = true;
    }
    if (password_field.value.length < 6) {
        warnings += 'La contraseña debe tener 6 caracteres al menos<br>';
        errores = true;
    }
    if (password_field.value.length > 16) {
        warnings += 'La contraseña solo puede tener 16 carácteres como máximo<br>';
        errores = true;
    }
    if (!password_regex.test(password_field.value)) {
        warnings += 'La contraseña no es correcta<br>';
        errores = true;
    }
    if (repit_password_field.value === password_field.value) {
        warnings += 'Las contraseñas deben ser iguales<br>';
        errores = true;
    }
    if (!terms_field.checked) {
        warnings += 'Debes aceptar las condiciones de uso<br>';
        errores = true;
    }
    if(errores) {
        warnings_field.innerHTML = warnings;
    }
});