import { conectarUsuario } from "../services/client-services.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', async(e) => {
    e.preventDefault()
    const usuarioInput = document.querySelector('[data-usuario]')
    const passwordInput = document.querySelector('[data-password]')
    const usuarioInputValue = usuarioInput.value
    const passwordInputValue = passwordInput.value

    const usuarioDb = await conectarUsuario()
    usuarioDb.find(usuario => {
        if(usuario.nombre === usuarioInputValue && usuario.password === passwordInputValue) {
            localStorage.setItem('usuario', `${usuarioInputValue}`)
            return window.location.href = './productos.html'
        } else {
            const mensajeError = document.querySelector('[data-mensaje]')
            mensajeError.style.display = 'block'
            usuarioInput.style.border = '1px solid #c15755'
            passwordInput.style.border = '1px solid #c15755'
            // setAttribute('style', 'display: block;')
            setTimeout(() => {
                usuarioInput.style.border = 'none'
                passwordInput.style.border = 'none'
                mensajeError.style.display = 'none'
            }, 3500);
        }
    })
    
})

