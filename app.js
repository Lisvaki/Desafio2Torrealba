//prueba de funcionamiento de consola.

console.log("Bienvenido a tu espacio OVARS")

// Ventana de bienvenida al site.


let Bienvenida = prompt("Bienvenid@ a tu espacio OVARS, deseas suscribirte? \n Responde alguna de las siguientes opciones \n 1-Si, quiero saber mas \n 2- Mas tarde")

//funcion para solicitar informacion para la subscripcion.

function solicitarEmail(){
    
    let nombreIngresado = prompt("Dinos tu nombre")
    alert( "Te llamaremos:" + nombreIngresado)
    let emailIngresado = prompt("Ingresa tu correo")
    alert( "Gracias por suscribirte a nuestra comunidad sustentable!")
    
    }
switch (Bienvenida) {

    case "1" :

    alert ("Gracias, ingresa tu email, para que no te pierdas todas las novedades")

    solicitarEmail ();
    
    break;

    case"2":

    alert ("Te esperamos la proxima, para que te eneteres \n de toda la vida sustentable que tenemos para vos")

    break;

    default:
    
    alert ("Ingresa, una opción válida")

    break;

}

//arrays sobre lista de producto del site ecosostenible.
let numbers= ["protector solar","crema humectante","serum"]
show(numbers)
showDom ("esencialesPiel", numbers)

function show(arr){
    for (let i = 0; i<arr.length; i++) {
        console.log(arr[i])
        
    }
}

function showDom(productos, arr){
    document.getElementById(productos).innerHTML="";
    for(let i=0; i<arr.length;i++){
        document.getElementById(productos).innerHTML+=
       `<div> ${arr[i]}<div>`
    }
}