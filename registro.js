
let registros = [];
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

module.exports.registros=registros;
module.exports.agregarRegistro=agregarRegistro;


// function ordenarArreglo(arreglo){
//     arreglo.sort((a,b) => {
//     const apellidoA= a.apellido;
//     const apellidoB= b.apellido;
//     if (apellidoA < apellidoB) {
//          return -1;
//     }
//     if (apellidoA > apellidoB){
//          return 1;
//     }
//     return 0;
//     });
//  console.log(arreglo);
//  return arreglo;
// }
// module.exports.ordenarArreglo=ordenarArreglo;

// function filtrarCorreo(arreglo){
//     let arreglo2 = [];
//     for (const objeto of arreglo) {
//         if (objeto.correo.indexOf("gmail.com") >= 0) {
//             arreglo2.push(objeto);
//         }
//     }    
//     console.log(arreglo2);
//     return arreglo2;
    
// }
// module.exports.filtrarCorreo=filtrarCorreo;

