//saludo de bienvenida a ovars.
 console.log ("Bienvenido a OVARS");

 //llamado de lo que contiene el body de nuestro proyecto a la consola a traves del DOM

let idpadre = document.getElementById('body')
console.log (idpadre)

// productos destacados de la semana 

let iddestacados = document.getElementById('destacados')

const productos = ["Shampoo solido", "protector biodegradable", "isopos biodegradables", "cepillo dental de bamboo"]
for (const prod of productos) {
   
    let li = document.createElement ('li')
    li.innerHTML = prod
destacados.appendChild(li)
    
}