
const conectarUsuario = async() => {
    const respuesta = await fetch(`https://games-server-wwtb.onrender.com/usuario`)
    const data = await respuesta.json()
    return data
}

const obtenerProductos = async() => {
    const respuesta = await fetch(`https://games-server-wwtb.onrender.com/products`)
    const data = await respuesta.json()
    return data
}

const guardarProductos = async(params) => {
    await fetch(`https://games-server-wwtb.onrender.com/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(params),
    })
}

const obtenerProductoApiId = async(id) => {
    const respuesta = await fetch(`https://games-server-wwtb.onrender.com/products/${id}`)
    return await respuesta.json()
}

const editarProductoId = async(params) => {
    await fetch(`https://games-server-wwtb.onrender.com/products/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(params),
    })
}

const eliminarProductoId = async(id) => {
    fetch(`https://games-server-wwtb.onrender.com/products/${id}`, {
        method: 'DELETE'
    })
}

export {
    conectarUsuario,
    obtenerProductos,
    guardarProductos,
    obtenerProductoApiId,
    editarProductoId,
    eliminarProductoId
}