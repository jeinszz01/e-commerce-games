import { conectarUsuario } from "../services/client-services.js"

const mostrarUsuario = async() => {
    const usuarioLs = localStorage.getItem('usuario')
    const htmlUsuario = `
        <span class="hola">Hola:</span>
        <ul class="lista-usuario">
            <li>
                <span>${usuarioLs}</span>
                <img class="flecha" src="../assets/img/arrow.svg" />
                <ul class="cerrar-sesion">
                    <li><a href='./productos.html'>Productos menú</a></li>
                    <li><button data-usuario>Cerrar Sesión</button></li>
                </ul>
            </li>
        </ul>
    `
    
    const cajaUsuario = document.createElement('div')
    cajaUsuario.classList.add('usuario')

    cajaUsuario.innerHTML = htmlUsuario

    const botonLoginUsuario = document.querySelector('.boton-login-usuario')
    const dataLogin = document.querySelector('.data-login')

    const usuariosDb = await conectarUsuario()
    
    usuariosDb.find(usuarioDb => {
        if(usuarioLs === usuarioDb.nombre) {
            dataLogin.style.display = 'none'
            return botonLoginUsuario.appendChild(cajaUsuario)
        } else {
            dataLogin.style.display = 'inline-block'
        }
    })

    const botonCerrarSesion = cajaUsuario.querySelector('button')
    botonCerrarSesion.addEventListener('click', () => {
        localStorage.removeItem('usuario')
        cajaUsuario.style.display = 'none'
        dataLogin.style.display = 'inline-block'

        window.location.href = '../index.html'
    })

}
mostrarUsuario()
