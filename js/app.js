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
const cookies01 = new Producto ("Cookies decoradas", "galletitas", 500, 6, "galletitas de vainilla decoradas con glacé, sprinkles y pasta Ballina", "imagen", 16)
const cookies02 = new Producto ("Cookies con rocklets", "galletitas", 1000, 6, "galletitas de chocolate con rocklets", "imagen", 17)
const cookies03 = new Producto ("Cookies temáticas", "galletitas", 1600, 6, "🍪 Cookies de limón y vanilla + cookies de chocolate y naranja, decoradas con pasta Ballina y papel comestible", "imagen", 18)
const cupcake01 = new Producto ("Cupcakes temáticos", "cupcakes", 4500, 6, "🧁 Muffins de chocolate o vainilla, decorados con dulce de leche repostero y papel comestible", "imagen", 19)
const brownies01 = new Producto ("Blondies", "brownies", 600, 6, "✨Blondies✨ Brownies de chocolate blanco con pasas de arándano rojo.", "imagen", 20)
const brownies02 = new Producto ("Brownies", "brownies", 400, 6, "Brownies de chocolate negro", "imagen", 21)
const chipa = new Producto ("Chipas", "chipas", 1000, 6, "400 g de chipas lleeeeenas de queso", "imagen",22)


/*Arrays*/

//Catálogo de productos

const catalogo = [torta01,torta02,torta03,torta04,torta05,torta06,torta07,torta08,torta09,torta10,torta11,torta12,torta13,torta14,torta15,cookies01,cookies02,cookies03,cupcake01,brownies01,brownies02,chipa]

//Carrito 
let carrito = []


//Buscar productos por categoría


const buscar_torta = catalogo.filter((prod)=> prod.tipo == "torta")
const buscar_cookie = catalogo.filter((prod)=> prod.tipo == "galletitas")
const buscar_cupcake = catalogo.filter((prod)=> prod.tipo == "cupcakes")
const buscar_brownie = catalogo.filter((prod)=> prod.tipo == "brownies")

const btnFiltrarTorta = document.querySelector("#dropdown-torta")




/* DOM */

//Mostrar productos en el catálogo

const marketContainer = document.querySelector (".market__container")


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
 
/* Eventos */

//Agregar al carrito

const btnCarrito = document.querySelectorAll("#card_prod")


/* btnCarrito.forEach(e => {
    e.addEventListener("click", (e) => {
        agregarCarritoProd(e.target.id)
    })    
}) 
 */

//Mostrar productos en el carrito

const contenedorCarrito = document.querySelector("#contenedor_carrito")
contenedorCarrito.classList.add("carrito_template")




//Funciones

function agregarCarritoProd(indice) {
    let nuevoProd= catalogo[indice]
    /* let buscarProductoPorId = catalogo.find ((producto) => producto.id === parseInt(id)) */
    carrito.push(nuevoProd)
    monto_a_pagar += nuevoProd.precio
    console.log(carrito)
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
              <button id= "${producto.id}" class="btn btn-danger" onClick="eliminarProducto(${indice})">Eliminar</button>
            </div>
           `
        carritoCard.innerHTML = contenido_card
        contenedorCarrito.appendChild(carritoCard)
    })
    }



function eliminarProducto(indice) {
    let sacarProd = carrito[indice]
    carrito.splice(indice, 1)
    monto_a_pagar -= sacarProd.precio
}





