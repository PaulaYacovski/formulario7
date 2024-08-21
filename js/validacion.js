

function validar() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    // Limpiar alertas anteriores
    clearAlerts();

    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError('Todos los campos deben estar completos.');
        return; 
    }

    if (password1.length < 6) {
        showAlertError('La contraseña debe tener al menos 6 caracteres.');
        return; 
    }

    if (password1 !== password2) {
        showAlertError('Las contraseñas no coinciden.');
        return; 
    }

    if (!terminos) {
        showAlertError('Debes aceptar los términos y condiciones.');
        return; 
    }

    showAlertSuccess(); 
}

document.getElementById("regBtn").addEventListener("click", validar);

function showAlertSuccess() {
    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.classList.remove("fade");
    alertSuccess.classList.add("show");
    alertSuccess.querySelector('p').textContent = "Registro enviado correctamente"; // Mensaje de éxito
}

function showAlertError(message) {
    const alertError = document.getElementById("alert-danger");
    alertError.classList.remove("fade");
    alertError.classList.add("show");
    alertError.querySelector('p').textContent = message; 
}

function clearAlerts() {
    const alertSuccess = document.getElementById("alert-success");
    const alertError = document.getElementById("alert-danger");

    alertSuccess.classList.add("fade"); 
    alertSuccess.classList.remove("show");

    alertError.classList.add("fade"); 
    alertError.classList.remove("show");
}