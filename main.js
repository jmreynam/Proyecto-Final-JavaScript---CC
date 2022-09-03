const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const contadorCarrito = document.getElementById('contadorCarrito')
const Total = document.getElementById('Total')
const vaciarCarro = document.getElementById('vaciar-carrito')



let carro = []

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.image} alt= "">
    <h3>${producto.name}</h3>
    <p class="precioProducto">Precio:$ ${producto.price}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>

    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregaCarrito(producto.id)
    })    
})

function agregaCarrito(prodId) {

    const enCarro = carro.some (prod => prod.id === prodId) 

    if (enCarro){ 
        carro.map (prod => { 
            if (prod.id === prodId){
                prod.cant++
            }
        })
    } else { 
        const alCarro = stockProductos.find((prod) => prod.id === prodId)
        carro.push(alCarro)
    }
    
    actualizarCarrito()
}

function actualizarCarrito(){

    contenedorCarrito.innerHTML = "" 

    carro.forEach((producto) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${producto.name}</p>
        <p>Precio:$${producto.price}</p>
        <p>Cantidad: <span id="cantidad">${producto.cant}</span></p>
        <button onclick="eliminarDelCarro(${producto.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
    })
   
    contadorCarrito.innerText = carro.length 
    
    Total.innerText = carro.reduce((previusProd, currentProd) => previusProd + currentProd.cant * currentProd.price, 0)
    
}

function eliminarDelCarro(prodId){
    const elimino = carro.find((prod) => prod.id === prodId)
    const ubi = carro.indexOf(elimino)
    elimino.cant--;
    if (elimino.cant == 0){
        carro.splice(ubi, 1)
    }else{    
    //carro.splice(ubi, 1)
    carro.splice(ubi, 1, elimino)
    }
    actualizarCarrito()
    
}

vaciarCarro.addEventListener('click', () => {
    carro.length=0
    actualizarCarrito()
})