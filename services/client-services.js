
const conectarUsuario = async() => {
    const respuesta = await fetch(`http://localhost:3000/usuario`)
    const data = await respuesta.json()
    return data
}

const obtenerProductos = async() => {
    const respuesta = await fetch(`http://localhost:3000/products`)
    const data = await respuesta.json()
    return data
}

const guardarProductos = async(params) => {
    await fetch(`http://localhost:3000/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(params),
    })
}

const obtenerProductoApiId = async(id) => {
    const respuesta = await fetch(`http://localhost:3000/products/${id}`)
    return await respuesta.json()
    
}

const editarProductoId = async(params) => {
    await fetch(`http://localhost:3000/products/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(params),
    })
}

const eliminarProductoId = async(id) => {
    fetch(`http://localhost:3000/products/${id}`, {
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