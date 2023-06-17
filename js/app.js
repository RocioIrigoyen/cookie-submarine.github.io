//variables 
let monto_a_pagar = 0


/*Objetos*/

//Productos de la tienda

function Producto (nombre, tipo, precio, cantidad, descripcion, imagen, id) {

    this.nombre = nombre
    this.tipo = tipo
    this.precio = precio
    this.cantidad= cantidad
    this.descripcion = descripcion
    this.imagen = imagen
    this.id= id
    this.disponible= true
    this.vegano= false
    this.declarar_precio= function () {
        alert(`El precio del producto seleccionado es ${this.precio}`)
    }
}

const torta01 = new Producto ("Marquise de chocolate", "torta", 2500, 1, "La clásica Marquise tiene una base de chocolate águila semiamargo y dulce de leche repostero", "imagen", 1)
const torta02 = new Producto ("Carrot Cake", "torta", 2650, 1, " tradicional bizcochuelo de zanahoria junto a unas crujientes nueces y pasas rubias combinan a la perfección con buttercream y relleno de chocolate blanco", "imagen", 2)
const torta03 = new Producto ("Bananarama", "torta", 3800, 1, " La clásica banofee rellena con dulce de leche vacalin pero con una vuelta de tuerca!/t Podés reemplazar la masa de cacao amargo por una de vainilla", "imagen", 3)
const torta04 = new Producto ("Strawberry fields forever", "torta", 1500, 1, " Let me take you down 'cause I'm going to... 🍓 Strawberry fields forever 🍓 La clásica tarta de frutilla y pastelera 🍰", "imagen", 4)
const torta05 = new Producto ("Cheseecake", "torta", 2000, 1, "La clásica tarta de queso con una exquisita mermelada casera de frutillas 🍓 Podés pedirla en sus variantes: ✨ Arándanos ✨ Mix de frutos rojos", "imagen", 5)
const torta06 = new Producto ("Poires et amandes", "torta", 3500, 1, " 🍐Tarta de peras y almendras🍐 Masa quebrada rellena de crema de almendras y peras en compota de Chardonnay 🍾", "imagen", 6)
const torta07 = new Producto ("Cookies & Cream", "torta", 5600, 1, " ✨Cookies&cream✨ Uno de los más pedidos! Combinamos oreos con chocolate blanco de chocolate Águila. Podés optar por pedirlo con crema de limón 🍋 o dulce de leche 🍯", "imagen", 7)
const torta08 = new Producto ("Chococheese", "torta", 2550, 1, " 🍫Chococheese🍫 Otro de los grandes favoritos! Con una base de chocolinas, crema de chocotorta y ganache de chocolate semiamargo.", "imagen", 8)
const torta09 = new Producto ("Dublin", "torta", 5500, 1, " 🍀Dublin🍀 Cheesecake de crema irlandesa y chocolate 🤤", "imagen", 9)
const torta10 = new Producto ("Tentación Suprema", "torta", 1500, 1, " ✨ Tentación Suprema✨ Miren lo que es esta bomba 😍🤤 Bizcochuelo de chocolate, fruttillas y crema, dulce de leche repostero, mousse de chocolate", "imagen", 10)
const torta11 = new Producto ("Chococheese", "torta", 1000, 1, " 🍫Chococheese🍫 Otro de los grandes favoritos! Con una base de chocolinas, crema de chocotorta y ganache de chocolate semiamargo.", "imagen", 11)
const torta12 = new Producto ("Choco & Nut", "torta", 3600, 1, " ✨Choco&Nut✨ 🍰Cheesecake de crema Kinder con cobertura de chocolate con leche 🍫 Decorado con Nutella 🌰 y chocolate Kinder 🤤", "imagen", 12)
const torta13 = new Producto ("Red Velvet", "torta", 900, 1, "✨Red Velvet✨ 🎂El Red Velvet Cake (literalmente 'torta de terciopelo rojo') consta de un bizcochuelo de cacao de color rojo oscuro", "imagen", 13)
const torta14 = new Producto ("Apple Crumble", "torta", 4500, 1, `Como lo prometido es deuda... ✨Apple Crumble ✨` , "imagen", 14)
const torta15 = new Producto ("Torta temática", "torta", 2500, 1,"Pedí tu diseño con mínimo 10 días de anticipación", "imagen", 15)
const cookies01 = new Producto ("Cookies decoradas", "galletitas", 500, 1, "galletitas de vainilla decoradas con glacé, sprinkles y pasta Ballina", "imagen", 16)
const cookies02 = new Producto ("Cookies con rocklets", "galletitas", 1000, 1, "galletitas de chocolate con rocklets", "imagen", 17)
const cookies03 = new Producto ("Cookies temáticas", "galletitas", 1600, 1, "🍪 Cookies de limón y vanilla + cookies de chocolate y naranja, decoradas con pasta Ballina y papel comestible", "imagen", 18)
const cupcake01 = new Producto ("Cupcakes temáticos", "cupcakes", 4500, 1, "🧁 Muffins de chocolate o vainilla, decorados con dulce de leche repostero y papel comestible", "imagen", 19)
const brownies01 = new Producto ("Blondies", "brownies", 600, 1, "✨Blondies✨ Brownies de chocolate blanco con pasas de arándano rojo.", "imagen", 20)
const brownies02 = new Producto ("Brownies", "brownies", 400, 1, "Brownies de chocolate negro", "imagen", 21)
const chipa = new Producto ("Chipas", "chipas", 1000, 1, "400 g de chipas lleeeeenas de queso", "imagen",22)


/*Arrays*/

//Catálogo de productos

let catalogo = []

//Carrito 
let carrito = []

//Filtro de búsqueda - buscar productos por categoría

/* const btnFiltro = document.querySelector (".dropdown-item") */

/* btnFiltro.addEventListener("click", (e) => {
    if (e.value == "torta") {
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
                  <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${indice})">Agregar al carrito</button></a>
                </div>
            </div>
               `
                   
            marketContainer.appendChild(marketCard) 
        })
    } else if (e.value == "galletitas") {
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
                  <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${indice})">Agregar al carrito</button></a>
                </div>
            </div>
               `
                   
            marketContainer.appendChild(marketCard) 
        })

    } else if (e.value == "brownies") {
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
                  <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${indice})">Agregar al carrito</button></a>
                </div>
            </div>
               `
                   
            marketContainer.appendChild(marketCard) 
        })

    } else if (e.value == "cupcakes") {
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
                  <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${indice})">Agregar al carrito</button></a>
                </div>
            </div>
               `
                   
            marketContainer.appendChild(marketCard) 
        })
    } else {
       
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
                  <a href="#contenedor_carrito"><button id= "${producto.id}" class="btn btn-primary" onClick="agregarCarritoProd(${indice})">Agregar al carrito</button></a>
                </div>
            </div>
               `
                   
            marketContainer.appendChild(marketCard)
        })

    }
    }) */

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



/* DOM */

//Mostrar productos en el catálogo

const marketContainer = document.querySelector (".market__container")

fetch("./data.json")
  .then((resultado) => resultado.json())
  .then((data) => {
    cargarProductos(data)
  })

  const cargarProductos = (data) => {
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

 
/* Eventos */

/* Carrito */

const btnCarrito = document.querySelectorAll("#card_prod")
const contenedorCarrito = document.querySelector("#contenedor_carrito")
const totalPagar = document.querySelector("#total_pagar")

//Funciones

function mostrarCarrito() {
    contenedorCarrito.classList.add("carrito_template")
    contenedorCarrito.innerHTML=""
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
        <button class="btn btn-primary" onClick="iniciarCompra()">Iniciar compra</button>
        `
        totalPagar.appendChild(mensajePagar)
    }
}

function iniciarCompra() {
    contenedorCarrito.innerHTML=""
    totalPagar.innerHTML=""
    let compraIniciada = document.createElement("div")
    compraIniciada.innerHTML=
    `<h3>¡Gracias por su compra! Se le cobrará un total de $${monto_a_pagar}</h3>`
    totalPagar.appendChild(compraIniciada)
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

let inputNombre = document.querySelector("#nombre")
let inputMail = document.querySelector("#email")


function enviarFormulario (e) {
    e.preventDefault() 
    contenedorForm.innerHTML= ""
    let mensajeExito = document.createElement("div")
    mensajeExito.innerHTML=
    `
    <h2>¡Gracias, ${inputNombre.value}! Tu pedido fue enviado. Nos comunicaremos a la brevedad.</h2>
    `
    contenedorForm.appendChild(mensajeExito)

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



document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        monto_a_pagar = JSON.parse(localStorage.getItem("deuda"))
        mostrarCarrito()
        mostrarMontoAPagar() 
    }
})





