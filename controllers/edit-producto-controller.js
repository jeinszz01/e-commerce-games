import { obtenerProductoApiId, editarProductoId } from "../services/client-services.js";


const obtenerProductoId = async() => {
    
    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    if(id===null) {
        window.location.href = '/pages/error.html'
    }

    const producto = await obtenerProductoApiId(id)

    const {nombreProducto, urlImg, categoria, precio, descuento, descripcion, precioFinal} = producto
    
    document.querySelector('[data-nombre]').value = nombreProducto
    document.querySelector('[data-url]').value = urlImg
    document.querySelector('[data-categoria]').value = categoria
    document.querySelector('[data-precio]').value = precio
    document.querySelector('[data-descuento]').value = descuento
    document.querySelector('[data-descripcion]').value = descripcion
    //const precioFinal = precio - ((precio*descuento)/100)
}
obtenerProductoId()


const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', async(e) => {
    e.preventDefault()

    const url = new URL(window.location)
    const id = url.searchParams.get('id')

    const nombreProducto = document.querySelector('[data-nombre]').value
    const urlImg = document.querySelector('[data-url]').value
    const categoriaInput = document.querySelector('[data-categoria]')
    const categoria = categoriaInput.value
    const precio = document.querySelector('[data-precio]').value
    let descuento = document.querySelector('[data-descuento]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    const precioFinal = (precio - ((precio*descuento)/100)).toFixed(2)

    if(descuento==='') {
        descuento = 0
    }

    if(categoria==='0') {
        categoriaInput.style.border = '1px solid #c15755'
        const mensajeError = document.querySelector('[data-mensaje]')
        mensajeError.style.display = 'block'
        setTimeout(() => {
            mensajeError.style.display = 'none'
            categoriaInput.style.border = 'none'
        }, 3500);
        return
    } else {
        const mensaje = document.querySelector('[data-correctos]')
        mensaje.style.display = 'block'
        
        await editarProductoId({nombreProducto, urlImg, categoria, precio, descuento, descripcion, precioFinal, id})

        return window.location.href = './productos.html'
    }

})
