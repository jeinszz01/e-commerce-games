
const conectarUsuario = async() => {
    const respuesta = await fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/usuario`)
    const data = await respuesta.json()
    return data
}

const obtenerProductos = async() => {
    const respuesta = await fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/products`)
    const data = await respuesta.json()
    return data
}

const guardarProductos = async(params) => {
    await fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify(params),
    })
}

const obtenerProductoApiId = async(id) => {
    const respuesta = await fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/products/${id}`)
    return await respuesta.json()
    
}

const editarProductoId = async(params) => {
    await fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/products/${params.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify(params),
    })
}

const eliminarProductoId = async(id) => {
    fetch(`https://my-json-server.typicode.com/jeinszz01/games-json-server/products/${id}`, {
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