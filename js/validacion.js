

     
    
document.getElementById("regBtn").addEventListener("click", function(){  const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    
    const terminos = document.getElementById('form-check-label').checked;
    
     
     if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError('Todos los campos deben estar completos.');
        
    }
    
    if (password1.length < 6) {
        showAlertError('La contraseña debe tener al menos 6 caracteres');
        
    }
    
    if (password1 !== password2) {
        showAlertError('Las contraseñas no coinciden');
    
    }
    
    showAlertSuccess();
     
if (!terminos){   
    showAlertError('Debe aceptar los términos y condiciones.');
}

}); 


function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
