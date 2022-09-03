const contenedor = document.getElementsByClassName('ventana-contenedor')[0]
const abrir = document.getElementById('boton-carrito')
const cerrar = document.getElementById('carritoCerrar')
const Carrito = document.getElementsByClassName('ventana-carro')[0]


abrir.addEventListener('click', ()=>{
    contenedor.classList.toggle('ventana-active')
})
cerrar.addEventListener('click', ()=>{
    contenedor.classList.toggle('ventana-active')
})

contenedor.addEventListener('click', (event) =>{
    contenedor.classList.toggle('ventana-active')

})
Carrito.addEventListener('click', (event) => {
    event.stopPropagation()
})