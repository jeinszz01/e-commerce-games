import { guardarProductos } from "../services/client-services.js"

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async(e) => {
    e.preventDefault()

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
        
        await guardarProductos({nombreProducto, urlImg, categoria, precio, descuento, descripcion, precioFinal})
        //setTimeout(() => {
        return window.location.href = './productos.html'
        //}, 3000);
    }
    
    
})
