import { obtenerProductoApiId, obtenerProductosCategoria } from "../services/client-services.js";

const productoSelect = (data) => {
    const {nombreProducto, urlImg, precio, descuento, descripcion, categoria, precioFinal} = data
    const ahorro = (precio - precioFinal).toFixed(2)
    const producto = document.createElement('div')
    producto.classList.add('producto')
    const cardContent = `
        <div class="producto-img">
            <img src="${urlImg}" alt="img-alterar">
        </div>
        <div class="producto-texto">
            <h3>${nombreProducto}</h3>
            <p>${descripcion}</p>
        </div>
        <div class="producto-precios">
            <div class="producto-oferta">
                <span class="precio-titulo">Precio Actual</span>
                <span class="producto-precio-descuento">&euro; ${precioFinal}</span>
                <span class="producto-precio">&euro; ${precio}</span>
                <span class="producto-ahorro">Ahorra hasta &euro; ${ahorro}</span>
                <div class="producto-botones">
                    <button>Comprar</button>
                    <button>Añadir al Carrito</button>
                </div>
            </div>
        </div>
    `
    producto.innerHTML = cardContent
    return producto
}

const cuerpoHtmlProducto = document.querySelector('[data-producto]')
const cuerpoHtmlCategoria = document.querySelector('[data-cards-categoria]')
const spinner1Html = document.querySelector('[data-spinner1]')
const spinner2Html = document.querySelector('[data-spinner2]')


const cargarProductoId = async() => {
    const url = new URL(window.location)
    const id = url.searchParams.get('id')
    const categoria = url.searchParams.get('categoria')

    if(id===null || categoria===null) {
        window.location.href = '/pages/error.html'
    }

    //const inicio = performance.now()
    const [data, productos] = await Promise.all([obtenerProductoApiId(id), obtenerProductosCategoria(categoria)])
    //const fin = performance.now()
    //console.log(`tiempo ${fin-inicio}ms`)
    if(data) {
        spinner1Html.style.display = 'none'
    }
    if(productos) {
        spinner2Html.style.display = 'none'
    }
    const producto = productoSelect(data)
    cuerpoHtmlProducto.appendChild(producto)

    productos.map(prod => {
        const nuevaCard = productosCategoria(prod)
        cuerpoHtmlCategoria.appendChild(nuevaCard)
    })
    
}
cargarProductoId()


const productosCategoria = (producto) => {
    const {nombreProducto, urlImg, precio, descuento, categoria, precioFinal, id} = producto
    
    const card = document.createElement('div')
    card.classList.add('card')
    const cardContent = `
        <a href='pages/vistaProducto.html?id=${id}?categoria=${categoria}'>
            <div>
                <div class="card-imagen">
                    <img class="imagen-game" src=${urlImg} alt=${nombreProducto} />
                </div>
            </div>
            <div class="card-contenido">
                <h3>${nombreProducto}</h3>
                <div class="card-precio">
                    <div class="card-pago">
                        <span>${precioFinal}</span>
                        <sup>EUR</sup></a>
                    </div>
                    <div class="card-descuento">
                        <span class="precio-real">${precio}</span>
                        <sup>EUR</sup>
                        <span class="card-porcentaje">-${descuento}%</span>
                    </div>
                </div>
            </div>
        </a>
    `
    card.innerHTML = cardContent
    return card
}
