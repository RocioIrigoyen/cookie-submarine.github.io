//variables 
let monto_a_pagar = 0

/*Arrays*/

//Catálogo de productos

let catalogo = []

//Carrito 
let carrito = []

//Filtro de búsqueda - buscar productos por categoría


const btnTorta = document.querySelector ("#dropdown-torta")
const btnCookie = document.querySelector ("#dropdown-galle")
const btnBrownie = document.querySelector ("#dropdown-brownie")
const btnCupcake = document.querySelector ("#dropdown-cupcake") 


 btnTorta.addEventListener("click", (e) => {
    const buscar_torta = catalogo.filter((prod)=> prod.tipo == "torta")
    marketContainer.innerHTML=""
    buscar_torta.forEach((producto, indice) => {
        let marketCard = document.createElement("article")
        marketCard.innerHTML =
            `
        <div id= "card_prod" class="card" style="width: 18rem;">
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <p class="card-text">${producto.descripcion}</p>
              <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${producto.id})">Agregar al carrito</button></a>
            </div>
        </div>
           `
               
        marketContainer.appendChild(marketCard) 
    })
}) 

btnCookie.addEventListener("click", (e) => {
    const buscar_cookie = catalogo.filter((prod)=> prod.tipo == "galletitas")
    marketContainer.innerHTML=""
    buscar_cookie.forEach((producto, indice) => {
        let marketCard = document.createElement("article")
        marketCard.innerHTML =
            `
        <div id= "card_prod" class="card" style="width: 18rem;">
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <p class="card-text">${producto.descripcion}</p>
              <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${producto.id})">Agregar al carrito</button></a>
            </div>
        </div>
           `
               
        marketContainer.appendChild(marketCard) 
    })
}) 

 btnBrownie.addEventListener("click", (e) => {
    const buscar_brownie = catalogo.filter((prod)=> prod.tipo == "brownies")
    marketContainer.innerHTML=""
    buscar_brownie.forEach((producto, indice) => {
        let marketCard = document.createElement("article")
        marketCard.innerHTML =
            `
        <div id= "card_prod" class="card" style="width: 18rem;">
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <p class="card-text">${producto.descripcion}</p>
              <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${producto.id})">Agregar al carrito</button></a>
            </div>
        </div>
           `
               
        marketContainer.appendChild(marketCard) 
    })
})
 

btnCupcake.addEventListener("click", (e) => {
    const buscar_cupcake = catalogo.filter((prod)=> prod.tipo == "cupcakes")
    marketContainer.innerHTML=""
    buscar_cupcake.forEach((producto, indice) => {
        let marketCard = document.createElement("article")
        marketCard.innerHTML =
            `
        <div id= "card_prod" class="card" style="width: 18rem;">
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <p class="card-text">${producto.descripcion}</p>
              <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${producto.id})">Agregar al carrito</button></a>
            </div>
        </div>
           `
               
        marketContainer.appendChild(marketCard) 
    })
})



//Mostrar productos en el catálogo

const marketContainer = document.querySelector (".market__container")

const traerProductos = async() => {
    const respuesta = await fetch("./data.json")
    const data = await respuesta.json()
    catalogo = data
    catalogo.forEach((producto, indice) => {
        let marketCard = document.createElement("article")
        marketCard.innerHTML =
            `
        <div id= "card_prod" class="card" style="width: 18rem;">
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <p class="card-text">${producto.descripcion}</p>
              <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${producto.id})">Agregar al carrito</button></a>
            </div>
        </div>
           `
               
        marketContainer.appendChild(marketCard)
    })
}

traerProductos()


/* Carrito */

const btnCarrito = document.querySelectorAll("#card_prod")
const contenedorCarrito = document.querySelector("#contenedor_carrito")
const totalPagar = document.querySelector("#total_pagar")

//Funciones

function mostrarCarrito() {
    contenedorCarrito.classList.add("carrito_template", "text-primary")
    contenedorCarrito.innerHTML="<h2>Carrito</h2>"
    carrito.forEach ((producto, indice) => {
        let carritoCard = document.createElement("div")
        carritoCard.classList.add("card-carrito")
        let contenido_card =
            `
            <img src="./imgs/torta_prueba.jpg" class="card-img-top" alt="torta">
            <div class="card-body">
              <h5 class="card-title"> ${producto.nombre}</h5>
              <h6 class="card-title"> $${producto.precio}</h6>
              <h6 class="card-title"> Cantidad: ${producto.cantidad}</h6>
              <button id= "${producto.id}" class="btn btn-danger" onClick="eliminarProducto(${indice})">Eliminar</button>
            </div>
           `
        carritoCard.innerHTML = contenido_card
        contenedorCarrito.appendChild(carritoCard)
    })
}

function mostrarMontoAPagar() {
    totalPagar.classList.add("carrito_template")
    totalPagar.innerHTML=""
    if (monto_a_pagar != 0) {
        let mensajePagar = document.createElement("div")
        mensajePagar.innerHTML=
        `<h3>Total a pagar: ${monto_a_pagar}</h3>
        <button class="btn btn-danger" onClick="vaciarCarrito()">Vaciar carrito</button>
        <button class="btn btn-primary" onClick="iniciarCompra()">Iniciar compra</button>
        `
        totalPagar.appendChild(mensajePagar)
    } else {
        let mensajeVaciar = document.createElement("div")
        mensajeVaciar.innerHTML=
        `<h3>El carrito está vacío</h3>
        `
        totalPagar.appendChild(mensajeVaciar)
    }

}

const pago = document.querySelector(".mensaje_pago")
let compraIniciada = document.createElement("div")

function iniciarCompra() {
    contenedorCarrito.innerHTML=""
    compraIniciada.innerHTML=
    `<h3>¡Gracias por su compra! Se le cobrará un total de $${monto_a_pagar}</h3>
    <div class="container p-0">
    <div class="card px-4">
        <p class="h8 py-3">Datos de pago</p>
        <div id="error_tarjeta"></div>
        <div class="row gx-3">
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Nombre</p>
                    <input id="nombre_tarjeta" class="form-control mb-3" type="text" placeholder="Ingrese su nombre como figura en la tarjeta">
                </div>
            </div>
            <div class="col-12">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Número de la tarjeta</p>
                    <input id="numero_tarjeta" class="form-control mb-3" type="text" placeholder="1234 5678 435678">
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">Fecha de vencimiento</p>
                    <input id="fecha_vencimiento" class="form-control mb-3" type="text" placeholder="MM/YYYY">
                </div>
            </div>
            <div class="col-6">
                <div class="d-flex flex-column">
                    <p class="text mb-1">CVV</p>
                    <input id="cvv" class="form-control mb-3 pt-2 " type="password" placeholder="***">
                </div>
            </div>
            <div class="col-12">
                <div class="btn btn-primary mb-3">
                    <button class="btn btn-primary" onClick="finalizarCompra()">Pagar $${monto_a_pagar}</button>
                    <span class="fas fa-arrow-right"></span>
                </div>
            </div>
        </div>
    </div>
</div>
`
    pago.appendChild(compraIniciada)
    vaciarCarrito()
}


function agregarCarritoProd(id) {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Producto agregado al carrito',
        showConfirmButton: false,
        timer: 1500
      })

    let nuevoProd= catalogo.find((producto) => producto.id === id )
    let verifyIndex = carrito.findIndex((producto) => {
        return producto.id === nuevoProd.id
    })
    if (verifyIndex === -1) {
        carrito.push(nuevoProd)
        monto_a_pagar += nuevoProd.precio
        console.log(carrito)
        guardarStorage(carrito)
        actualizarStorage()
        mostrarCarrito()
        mostrarMontoAPagar()
    } else {
        carrito[verifyIndex].cantidad += 1
        monto_a_pagar += carrito[verifyIndex].precio
        guardarStorage(carrito)
        actualizarStorage()
        mostrarCarrito()
        mostrarMontoAPagar()
    }
    }


function eliminarProducto(indice) {
    let sacarProd = carrito[indice]
    monto_a_pagar -= sacarProd.precio * sacarProd.cantidad
    carrito.splice(indice, 1)
    guardarStorage(carrito)
    actualizarStorage()
    mostrarCarrito()
    mostrarMontoAPagar()
}

function vaciarCarrito() {
    while (carrito.length > 0) {
        carrito.pop()
        monto_a_pagar= 0
    }


    
    mostrarCarrito()
    guardarStorage(carrito)
    actualizarStorage()
    mostrarMontoAPagar()
    
}


function guardarStorage(cart) {
    localStorage.setItem("carrito", JSON.stringify(cart))
    localStorage.setItem("deuda", JSON.stringify(monto_a_pagar))
}


function actualizarStorage() {
    const storageCarrito = JSON.parse(localStorage.getItem("carrito"))
    const storageDeuda = JSON.parse(localStorage.getItem("deuda"))
    localStorage.setItem("carrito", JSON.stringify(storageCarrito))
    localStorage.setItem("deuda", JSON.stringify(storageDeuda))
}


/* Formulario de contacto */

const btnEnviar = document.querySelector("#btn-enviar-formulario")
const contenedorForm = document.querySelector(".datos-contacto")
const errorFormulario = document.querySelector("#error")

let inputNombre = document.querySelector("#nombre")
let inputMail = document.querySelector("#email")


function enviarFormulario (e) {
    e.preventDefault() 
    let mensajeError = []
    if (inputNombre.value === null || inputNombre.value === "") {
        mensajeError.push("Por favor, ingresa tu nombre")
    } else if (inputMail.value === null || inputMail.value === "") {
        mensajeError.push("Por favor, ingresa tu dirección de mail")
    } else {
        contenedorForm.innerHTML= ""
        let mensajeExito = document.createElement("div")
        mensajeExito.innerHTML=
        `
        <h2>¡Gracias, ${inputNombre.value}! Tu pedido fue enviado. Nos comunicaremos al mail ${inputMail.value} a la brevedad.</h2>
        `
        contenedorForm.appendChild(mensajeExito)

     }

     errorFormulario.innerHTML= mensajeError


}

btnEnviar.addEventListener("click", enviarFormulario)


inputNombre.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Completá el campo "Nombre"',
            showConfirmButton: false,
            timer: 1500
          })
    }
}) 

inputMail.addEventListener("blur", (e) => {
    if (e.target.value === "") {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Completá el campo "Email"',
            showConfirmButton: false,
            timer: 1500
          })
    }
}) 



function finalizarCompra() {
    const errorTarjeta = document.querySelector("#error_tarjeta")
    let inputNombreTarjeta = document.querySelector("#nombre_tarjeta")
    let inputNumeroTarjeta = document.querySelector("#numero_tarjeta")
    let inputFechaVenc = document.querySelector("#fecha_vencimiento")
    let inputCVV = document.querySelector("#cvv")
    let mensajeErrorTarjeta = []
    if (inputNombreTarjeta.value === null || inputNombreTarjeta.value === "") {
        mensajeErrorTarjeta.push("Por favor, ingresa tu nombre")
    } else if (inputNumeroTarjeta.value === null || inputNumeroTarjeta.value === "") {
        mensajeErrorTarjeta.push("Por favor, ingresa el número de una tarjeta de crédito o débito")
    } else if (inputFechaVenc.value === null || inputFechaVenc.value === "") {
        mensajeErrorTarjeta.push("Por favor, ingresa la fecha de vencimiento")
    } else if (inputCVV.value === null || inputCVV.value === "") {
        mensajeErrorTarjeta.push("Por favor, ingresa los 3 números al dorso de la tarjeta")
    } else {
        pago.innerHTML=""
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: '¡Gracias por tu compra! Dentro de 3 días podrás retirarla en Calle falsa 123 ',
            showConfirmButton: true,
            timer: false
          })

    }

    errorTarjeta.innerHTML= mensajeErrorTarjeta
}


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        monto_a_pagar = JSON.parse(localStorage.getItem("deuda"))
        mostrarCarrito()
        mostrarMontoAPagar() 
    }
})




