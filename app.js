//variables 
let monto_a_pagar = 0


//Ejecución de funciones
bienvenida ()


/* funciones */

function bienvenida () {
    alert("¡Te damos la bienvenida a Cookie Submarine!")
}

function agregarCarrito(a) {
    monto_a_pagar += a
}




/*Objetos*/

//Productos de la tienda

function Producto (nombre, tipo, precio, cantidad, descripcion, imagen) {

    this.nombre = nombre
    this.tipo = tipo
    this.precio = precio
    this.cantidad= cantidad
    this.descripcion = descripcion
    this.imagen = imagen
    this.disponible= true
    this.vegano= false
    this.declarar_precio= function () {
        alert(`El precio del producto seleccionado es ${this.precio}`)
    }
}

const torta01 = new Producto ("Marquise de chocolate", "torta", 2500, 1, "La clásica Marquise tiene una base de chocolate águila semiamargo y dulce de leche repostero", "imagen")
const torta02 = new Producto ("Carrot Cake", "torta", 2650, 1, " tradicional bizcochuelo de zanahoria junto a unas crujientes nueces y pasas rubias combinan a la perfección con buttercream y relleno de chocolate blanco", "imagen")
const torta03 = new Producto ("Bananarama", "torta", 3800, 1, " La clásica banofee rellena con dulce de leche vacalin pero con una vuelta de tuerca!/t Podés reemplazar la masa de cacao amargo por una de vainilla", "imagen")
const torta04 = new Producto ("Strawberry fields forever", "torta", 1500, 1, " Let me take you down 'cause I'm going to... 🍓 Strawberry fields forever 🍓 La clásica tarta de frutilla y pastelera 🍰", "imagen")
const torta05 = new Producto ("Cheseecake", "torta", 2000, 1, "La clásica tarta de queso con una exquisita mermelada casera de frutillas 🍓 Podés pedirla en sus variantes: ✨ Arándanos ✨ Mix de frutos rojos", "imagen")
const torta06 = new Producto ("Poires et amandes", "torta", 3500, 1, " 🍐Tarta de peras y almendras🍐 Masa quebrada rellena de crema de almendras y peras en compota de Chardonnay 🍾", "imagen")
const torta07 = new Producto ("Cookies & Cream", "torta", 5600, 1, " ✨Cookies&cream✨ Uno de los más pedidos! Combinamos oreos con chocolate blanco de chocolate Águila. Podés optar por pedirlo con crema de limón 🍋 o dulce de leche 🍯", "imagen")
const torta08 = new Producto ("Chococheese", "torta", 2550, 1, " 🍫Chococheese🍫 Otro de los grandes favoritos! Con una base de chocolinas, crema de chocotorta y ganache de chocolate semiamargo.", "imagen")
const torta09 = new Producto ("Dublin", "torta", 5500, 1, " 🍀Dublin🍀 Cheesecake de crema irlandesa y chocolate 🤤", "imagen")
const torta10 = new Producto ("Tentación Suprema", "torta", 1500, 1, " ✨ Tentación Suprema✨ Miren lo que es esta bomba 😍🤤 Bizcochuelo de chocolate, fruttillas y crema, dulce de leche repostero, mousse de chocolate", "imagen")
const torta11 = new Producto ("Chococheese", "torta", 1000, 1, " 🍫Chococheese🍫 Otro de los grandes favoritos! Con una base de chocolinas, crema de chocotorta y ganache de chocolate semiamargo.", "imagen")
const torta12 = new Producto ("Choco & Nut", "torta", 3600, 1, " ✨Choco&Nut✨ 🍰Cheesecake de crema Kinder con cobertura de chocolate con leche 🍫 Decorado con Nutella 🌰 y chocolate Kinder 🤤", "imagen")
const torta13 = new Producto ("Red Velvet", "torta", 900, 1, "✨Red Velvet✨ 🎂El Red Velvet Cake (literalmente 'torta de terciopelo rojo') consta de un bizcochuelo de cacao de color rojo oscuro, ya sea por el uso de colorantes naturales como la remolacha, o bien por colorantes en pasta.🍰 Tradicionalmente, tanto su relleno como su cobertura llevan cream cheese, un glaseado de queso crema🍶 , limón 🍋, manteca🧈 y azúcar impalpable.🍫🌰 Como extra le sumamos #Nutella 🤤", "imagen")
const torta14 = new Producto ("Apple Crumble", "torta", 4500, 1, `Como lo prometido es deuda... ✨Apple Crumble ✨

🥄 Ingredientes

• MASA
- 200 g de harina 0000
- 50 g de fécula de maíz
- 80 g de azúcar impalpable
- 150 g de manteca
- 1 huevo 🥚

• RELLENO
- 6 manzanas (usé 4 🍏 y 2 🍎)
- 50 g de manteca
- 1 cucharada de miel 🍯
- 1 cucharadita de canela
- 100 g de nueces
- Ralladura de 1 🍋` , "imagen")

const torta15 = new Producto ("Torta temática", "torta", 2500, 1,"Pedí tu diseño con mínimo 10 días de anticipación", "imagen")
const cookies01 = new Producto ("Cookies decoradas", "galletitas", 500, 6, "galletitas de vainilla decoradas con glacé, sprinkles y pasta Ballina", "imagen")
const cookies02 = new Producto ("Cookies con rocklets", "galletitas", 1000, 6, "galletitas de chocolate con rocklets", "imagen")
const cookies03 = new Producto ("Cookies temáticas", "galletitas", 1600, 6, "🍪 Cookies de limón y vanilla + cookies de chocolate y naranja, decoradas con pasta Ballina y papel comestible", "imagen")
const cupcake01 = new Producto ("Cupcakes temáticos", "cupcakes", 4500, 6, "🧁 Muffins de chocolate o vainilla, decorados con dulce de leche repostero y papel comestible", "imagen")
const brownies01 = new Producto ("Blondies", "brownies", 600, 6, "✨Blondies✨ Brownies de chocolate blanco con pasas de arándano rojo.", "imagen")
const brownies02 = new Producto ("Brownies", "brownies", 400, 6, "Brownies de chocolate negro", "imagen")
const chipa = new Producto ("Chipas", "chipas", 1000, 6, "400 g de chipas lleeeeenas de queso", "imagen")


/*Arrays*/

//Catálogo de productos

const catalogo = [torta01,torta02,torta03,torta04,torta05,torta06,torta07,torta08,torta09,torta10,torta11,torta12,torta13,torta14,torta15,cookies01,cookies02,cookies03,cupcake01,brownies01,brownies02,chipa]

//Carrito 
const carrito = []



/*Métodos*/ 

//Mostrar productos

const catalogo_inicio = catalogo.map( (prod) => prod.nombre)
alert(`Estos son nuestros productos: 
${catalogo_inicio.join(",  ")}`)

//Buscar un producto 

let producto_buscado = prompt("¿Qué producto desea buscar? Le diremos si está disponible")
if (catalogo_inicio.includes(producto_buscado)) {
    let producto_encontrado = catalogo_inicio.find((elemento) => elemento.includes(producto_buscado))
    alert(`${producto_encontrado} se encuentra disponible.`)
} else {
    alert("Lo sentimos. No contamos con ese producto.")
}



//Mostrar carrito


function verCarrito(){
    let ver_carrito = carrito.map((prod) => prod.nombre)
    alert(`Productos agregados al carrito: ${ver_carrito.join(", ")}
    Monto total a pagar: ${monto_a_pagar}$
    Volviendo al menú principal`)
   }



//Buscar productos por categoría
//Agregar al carrito

let seleccionado = prompt (`¿Qué clase productos desea comprar?
Ingrese el número correspondiente
1.tortas
2.cookies
3.cupcakes
4.brownies`)

const buscar_torta = catalogo.filter((prod)=> prod.tipo == "torta")
const buscar_cookie = catalogo.filter((prod)=> prod.tipo == "galletitas")
const buscar_cupcake = catalogo.filter((prod)=> prod.tipo == "cupcakes")
const buscar_brownie = catalogo.filter((prod)=> prod.tipo == "brownies")

if (seleccionado == 1) {
 let filtro = buscar_torta.map((prod) => prod.nombre)
 alert(`Estas son nuestras tortas:
 ${filtro.join(",  ")}
 A continuación, podrá elegir qué productos desea agregar al carrito`)

 for (let i = 0; i < 10; i++) {

    let productos = prompt(`¿Qué te gustaría agregar al carrito?
    
    Ingresá el número correspondiente. 
    Escriba VER CARRITO, COMPRAR para iniciar la compra o SALIR para salir.
    
    TORTAS
    1. ${torta01.nombre} (${torta01.precio})
    2. ${torta02.nombre} (${torta02.precio})
    3. ${torta03.nombre} (${torta03.precio})
    4. ${torta04.nombre} (${torta04.precio})
    5. ${torta05.nombre} (${torta05.precio})
    6. ${torta06.nombre} (${torta06.precio})
    7. ${torta07.nombre} (${torta07.precio})
    8. ${torta08.nombre} (${torta08.precio})
    9. ${torta09.nombre} (${torta09.precio})
    10. ${torta10.nombre} (${torta10.precio})
    11. ${torta11.nombre} (${torta11.precio})
    12. ${torta12.nombre} (${torta12.precio})
    13. ${torta13.nombre} (${torta13.precio})
    14. ${torta14.nombre} (${torta14.precio})
    15. ${torta15.nombre} (${torta15.precio})`)

    if (productos == 1) {
        let producto_seleccionado = torta01
        carrito.push(producto_seleccionado)
        agregarCarrito(torta01.precio)
        alert(`${torta01.descripcion}. 
        Se ha agregado ${torta01.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 2) {
        let producto_seleccionado = torta02
        carrito.push(producto_seleccionado)
        agregarCarrito(torta02.precio)
        alert(`${torta02.descripcion}. 
        Se ha agregado ${torta02.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 3) {
        let producto_seleccionado = torta03
        carrito.push(producto_seleccionado)
        agregarCarrito(torta03.precio)
        alert(`${torta03.descripcion}. 
        Se ha agregado ${torta03.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 4) {
        let producto_seleccionado = torta04
        carrito.push(producto_seleccionado)
        agregarCarrito(torta04.precio)
        alert(`${torta04.descripcion}. 
        Se ha agregado ${torta04.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`)  
    } else if (productos == 5) {
        let producto_seleccionado = torta05
        carrito.push(producto_seleccionado)
        agregarCarrito(torta05.precio)
        alert(`${torta05.descripcion}. 
        Se ha agregado ${torta05.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 6) {
        let producto_seleccionado = torta06
        carrito.push(producto_seleccionado)
        agregarCarrito(torta06.precio)
        alert(`${torta06.descripcion}. 
        Se ha agregado ${torta06.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 7) {
        let producto_seleccionado = torta07
        carrito.push(producto_seleccionado)
        agregarCarrito(torta07.precio)
        alert(`${torta07.descripcion}. 
        Se ha agregado ${torta07.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 8) {
        let producto_seleccionado = torta08
        carrito.push(producto_seleccionado)
        agregarCarrito(torta08.precio)
        alert(`${torta08.descripcion}. 
        Se ha agregado ${torta08.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`)         
    } else if (productos == 9) {
        let producto_seleccionado = torta09
        carrito.push(producto_seleccionado)
        agregarCarrito(torta09.precio)
        alert(`${torta09.descripcion}. 
        Se ha agregado ${torta01.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 10) {
        let producto_seleccionado = torta10
        carrito.push(producto_seleccionado)
        agregarCarrito(torta10.precio)
        alert(`${torta10.descripcion}. 
        Se ha agregado ${torta10.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 11) {
        let producto_seleccionado = torta11
        carrito.push(producto_seleccionado)
        agregarCarrito(torta11.precio)
        alert(`${torta11.descripcion}. 
        Se ha agregado ${torta11.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 12) {
        let producto_seleccionado = torta12
        carrito.push(producto_seleccionado)
        agregarCarrito(torta12.precio)
        alert(`${torta12.descripcion}. 
        Se ha agregado ${torta12.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 13) {
        let producto_seleccionado = torta13
        carrito.push(producto_seleccionado)
        agregarCarrito(torta13.precio)
        alert(`${torta13.descripcion}. 
        Se ha agregado ${torta13.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 14) {
        let producto_seleccionado = torta14
        carrito.push(producto_seleccionado)
        agregarCarrito(torta14.precio)
        alert(`${torta14.descripcion}. 
        Se ha agregado ${torta14.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 15) {
        let producto_seleccionado = torta15
        carrito.push(producto_seleccionado)
        agregarCarrito(torta15.precio)
        alert(`${torta15.descripcion}. 
        Se ha agregado ${torta15.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == "COMPRAR") {
        alert(`Usted debe: ${monto_a_pagar}`)
        break
    } else if (productos == "SALIR") {
        if(monto_a_pagar != 0) {
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
    }else if (productos == "VER CARRITO") {
        verCarrito()
    }else {
        alert("Por favor, ingrese uno de los valores indicados")
    }   
 }

} else if (seleccionado == 2) {
 let filtro = buscar_cookie.map((prod) => prod.nombre)
 alert(`Estas son nuestras cookies:
 ${filtro.join(",  ")}
 A continuación, podrá elegir qué productos desea agregar al carrito`)

 for (let i = 0; i < 10; i++) {

    let productos = prompt(`¿Qué te gustaría agregar al carrito?
    
    Ingresá el número correspondiente. 
    Escriba VER CARRITO, COMPRAR para iniciar la compra o SALIR para salir.
    
    COOKIES
    1. ${cookies01.nombre} (${cookies01.precio})
    2. ${cookies02.nombre} (${cookies02.precio})
    3. ${cookies03.nombre} (${cookies03.precio})`)

    if (productos == 1) {
        let producto_seleccionado = cookies01
        carrito.push(producto_seleccionado)
        agregarCarrito(cookies01.precio)
        alert(`${cookies01.descripcion}. 
        Se ha agregado ${cookies01.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 2) {
        let producto_seleccionado = cookies02
        carrito.push(producto_seleccionado)
        agregarCarrito(cookies02.precio)
        alert(`${cookies02.descripcion}. 
        Se ha agregado ${cookies02.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 3) {
        let producto_seleccionado = cookies03
        carrito.push(producto_seleccionado)
        agregarCarrito(cookies03.precio)
        alert(`${cookies03.descripcion}. 
        Se ha agregado ${cookies03.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == "COMPRAR") {
        alert(`Usted debe: ${monto_a_pagar}`)
        break
    } else if (productos == "SALIR") {
        if(monto_a_pagar != 0) {
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
    } else if (productos == "VER CARRITO") {
        verCarrito()
    } else {
        alert("Por favor, ingrese uno de los valores indicados")
    }  
 }
}else if (seleccionado == 3) {
 let filtro = buscar_cupcake.map((prod) => prod.nombre)
 alert(`Estos son nuestros cupcakes:
 ${filtro.join(",  ")}
 A continuación, podrá elegir qué productos desea agregar al carrito`)

 for (let i = 0; i < 10; i++) {

    let productos = prompt(`¿Qué te gustaría agregar al carrito?
    
    Ingresá el número correspondiente. 
    Escriba VER CARRITO, COMPRAR para iniciar la compra o SALIR para salir.
    
    CUPCAKES
    1. ${cupcake01.nombre} (${cupcake01.precio})`)

    if (productos == 1) {
        let producto_seleccionado = cupcake01
        carrito.push(producto_seleccionado)
        agregarCarrito(cupcake01.precio)
        alert(`${cupcake01.descripcion}. 
        Se ha agregado ${cupcake01.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == "COMPRAR") {
        alert(`Usted debe: ${monto_a_pagar}`)
        break
    } else if (productos == "SALIR") {
        if(monto_a_pagar != 0) {
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
    } else if (productos == "VER CARRITO") {
        verCarrito()
    } else {
        alert("Por favor, ingrese uno de los valores indicados")
    }  
  }
} else if (seleccionado == 4) {
 let filtro = buscar_brownie.map((prod) => prod.nombre)
 alert(`Estos son nuestros brownies:
 ${filtro.join(",  ")}
 A continuación, podrá elegir qué productos desea agregar al carrito`)

 for (let i = 0; i < 10; i++) {

    let productos = prompt(`¿Qué te gustaría agregar al carrito?
    
    Ingresá el número correspondiente. 
    Escriba VER CARRITO, COMPRAR para iniciar la compra o SALIR para salir.
    
    BROWNIES 
    1. ${brownies01.nombre} (${brownies01.precio})
    2. ${brownies02.nombre} (${brownies02.precio})`)

    if (productos == 1) {
        let producto_seleccionado = brownies01
        carrito.push(producto_seleccionado)
        agregarCarrito(brownies01.precio)
        alert(`${brownies01.descripcion}. 
        Se ha agregado ${brownies01.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == 2) {
        let producto_seleccionado = brownies02
        carrito.push(producto_seleccionado)
        agregarCarrito(brownies02.precio)
        alert(`${brownies02.descripcion}. 
        Se ha agregado ${brownies02.nombre} al carrito.
        Monto total a pagar: ${monto_a_pagar}`) 
    } else if (productos == "COMPRAR") {
        alert(`Usted debe: ${monto_a_pagar}`)
        break
    } else if (productos == "SALIR") {
        if(monto_a_pagar != 0) {
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
    } else if (productos == "VER CARRITO") {
        verCarrito()
    } else {
        alert("Por favor, ingrese uno de los valores indicados")
    }  
  }
} else {
    alert("Esa opción no es válida")
}
