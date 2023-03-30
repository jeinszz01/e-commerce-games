import { obtenerProductos } from "../services/client-services.js"

const nuevoProducto = (producto) => {
    const {nombreProducto, urlImg, precio, descuento, descripcion, categoria, precioFinal, id} = producto
    
    const card = document.createElement('div')
    card.classList.add('card')
    const cardContent = `
            <div>
                <a href="#">
                    <div class="card-imagen">
                        <img class="imagen-game" src=${urlImg} alt=${nombreProducto} />
                    </div>
                </a>
            </div>
            <div class="card-contenido">
                <h3>
                    <a href="#">${nombreProducto}</a>
                </h3>
                <div class="card-precio">
                    <div class="card-pago">
                        <span>${precioFinal}</span>
                        <sup>EUR</sup>
                    </div>
                    <div class="card-descuento">
                        <span class="precio-real">${precio}</span>
                        <sup>EUR</sup>
                        <span class="card-porcentaje">-${descuento}%</span>
                    </div>
                </div>
            </div>                
    `
    card.innerHTML = cardContent

    return card
}

const cuerpoHtmlTendencia = document.querySelector('[data-cards-tendencia]')
const cuerpoHtmlAventura = document.querySelector('[data-cards-aventura]')
const cuerpoHtmlTerror = document.querySelector('[data-cards-terror]')
const cuerpoHtmlEstrategia = document.querySelector('[data-cards-estrategia]')

const cargaProductosGeneral = async() => {
    const data = await obtenerProductos()

    data.filter(producto => {
        if(producto.categoria === 'tendencia') {
            const nuevaCard = nuevoProducto(producto)
            cuerpoHtmlTendencia.appendChild(nuevaCard)
        }
        if(producto.categoria === 'aventura') {
            const nuevaCard = nuevoProducto(producto)
            cuerpoHtmlAventura.appendChild(nuevaCard)
        }
        if(producto.categoria === 'terror') {
            const nuevaCard = nuevoProducto(producto)
            cuerpoHtmlTerror.appendChild(nuevaCard)
        }
        if(producto.categoria === 'estrategia') {
            const nuevaCard = nuevoProducto(producto)
            cuerpoHtmlEstrategia.appendChild(nuevaCard)
        }
        
    })
    
}

cargaProductosGeneral()