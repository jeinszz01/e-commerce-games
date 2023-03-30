import { obtenerProductos, eliminarProductoId } from "../services/client-services.js"

const nuevoProducto = (producto) => {
    const {nombreProducto, urlImg, precio, descuento, descripcion, categoria, precioFinal, id} = producto
    
    const card = document.createElement('div')
    card.classList.add('card')
    const cardContent = `
            <div>
                <a href="#">
                    <div class="card-imagen">
                        <img class="imagen-game" src=${urlImg} alt=${nombreProducto} />
                        <a href='./editarProducto.html?id=${id}'><img class="edit-svg" src="../assets/img/edit.svg" alt="edit-svg" /></a>
                        <button type='button' id='${id}' data-eliminar><img class="delete-svg" src="../assets/img/delete.svg" alt="delete-svg" /></button>
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

    const botonEliminar = card.querySelector('[data-eliminar]')
    botonEliminar.addEventListener('click', async() => {
        const id = botonEliminar.id
        await eliminarProductoId(id)
    })

    return card
}

const cuerpoHtml = document.querySelector('[data-cards]')


const cargaProductos = async() => {
    const data = await obtenerProductos()
    data.map(producto => {
        const nuevaCard = nuevoProducto(producto)
        cuerpoHtml.appendChild(nuevaCard)
    })
}
cargaProductos()
