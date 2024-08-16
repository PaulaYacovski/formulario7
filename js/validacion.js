

     
    function validar() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const password1 = document.getElementById('password1').value;
        const password2 = document.getElementById('password2').value;
        
        const terminos = document.getElementById('form-check-label').checked;
        
         
         if (!nombre || !apellido || !email || !password1 || !password2) {
            showAlertError('Todos los campos deben estar completos.');
            return;
        }
        
        if (password1.length < 6) {
            showAlertError('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        
        if (password1 !== password2) {
            showAlertError('Las contraseñas no coinciden');
            return;
        }
        
        showAlertSuccess();
         
         };
document.getElementById("regBtn").addEventListener("click", validarDatos); 


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
