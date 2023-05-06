//variables globales
let precio = 0
let producto = 0

//Mensaje de bienvenida
function bienvenida () {
    alert("¡Te damos la bienvenida a Cookie Submarine!")
}

//Agregar productos al carrito 
function agregarCarrito () {

    while (true) {
        
        let producto = prompt (`¿Qué te gustaría agregar al carrito?
        1. Marquise de chocolate ($1.500)
        2. Cheesecake ($2.500)
        3. Lemon Pie ($1.000)
        4. INICIAR COMPRA
        5. SALIR
        Ingresá el número correspondiente`)
        
        if (producto == 1) {
            precio += 1500
            alert(`Se ha agregado Marquise de chocolate al carrito. Monto total a pagar: ${precio}$`)
        } else if (producto == 2) {
            precio += 2500
            alert(`Se ha agregado Cheesecake al carrito. Monto total a pagar: ${precio}$`)
        } else if (producto == 3) {
            precio += 1000
            alert(`Se ha agregado Lemon Pie al carrito. Monto total a pagar: ${precio}$`) 
        } else if (producto == 4) {
            if (precio  != 0) {
                alert(`Usted debe un total de ${precio} pesos. Gracias por su compra.`)
                break
            } else {
                alert("No hay productos en el carrito. Elija un producto o escriba 5 para salir")
            }
        } else if (producto == 5) {
            if(precio != 0) {
                let salir = prompt("Hay productos en el carrito, ¿Está seguro de que desea salir? SI/NO")
                if (salir == "SI") {
                   alert("¡Nos vemos!")
                   break
                } else {
                    alert("Volviendo al menú principal")
                }
            } else {
                alert("¡Nos vemos!")
                break
            }  
        } else {
            alert("Por favor, ingrese uno de los números indicados")
        }

    }  
}


//Ejecución de funciones
bienvenida ()
agregarCarrito ()
