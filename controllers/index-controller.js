import { obtenerProductos } from "../services/client-services.js"

const nuevoProducto = (producto) => {
    const {nombreProducto, urlImg, precio, descuento, descripcion, categoria, precioFinal, id} = producto
    
    const card = document.createElement('div')
    card.classList.add('card')
    const cardContent = `
        <a href='pages/vistaProducto.html?id=${id}&categoria=${categoria}'>
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

const cuerpoHtmlTendencia = document.querySelector('[data-cards-tendencia]')
const cuerpoHtmlAventura = document.querySelector('[data-cards-aventura]')
const cuerpoHtmlTerror = document.querySelector('[data-cards-terror]')
const cuerpoHtmlEstrategia = document.querySelector('[data-cards-estrategia]')

const spinner1Html = document.querySelector('[data-spinner1]')
const spinner2Html = document.querySelector('[data-spinner2]')
const spinner3Html = document.querySelector('[data-spinner3]')
const spinner4Html = document.querySelector('[data-spinner4]')

const cargaProductosGeneral = async() => {
    const data = await obtenerProductos()
    if(data) {
        spinner1Html.style.display = 'none'
        spinner2Html.style.display = 'none'
        spinner3Html.style.display = 'none'
        spinner4Html.style.display = 'none'
    }

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