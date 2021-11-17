let registros=[];


function login(){
    debugger;
    registros[3];
    registros[4];
    let correo = document.getElementById("correo");
    let contrasena = document.getElementById("contrasena");

    if(correo === registros[3]){
        if(contrasena=== registros[4]){
            validarCAPTCHA()
            return true;
        }
    }else {
        return false;
    }
}

function agregarRegistro(){
    let registro = document.getElementsByTagName("input");
        
    let datosUsuario = {
        'nombre' : registro[0].value,
        'apellido' : registro[1].value,
        'telefono' : registro[2].value,
        'correo' : registro[3].value,
        'password' : registro[4].value
    }
    registros.push(datosUsuario); 
    console.log(registros);
}   



module.exports.login =login;
module.exports.registros=registros;
module.exports.validarCAPTCHA =validarCAPTCHA;
module.exports.agregarRegistro=agregarRegistro;
   

