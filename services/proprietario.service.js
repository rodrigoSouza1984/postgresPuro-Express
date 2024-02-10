import proprietarioRepositorio from "../repositories/proprietario.repository.js"

async function createProprietario(proprietario){    
    return await proprietarioRepositorio.insertProprietario(proprietario)
}

async function UpdateProprietario(proprietario){
    return await proprietarioRepositorio.update(proprietario)
}

async function getall(){    
    return await proprietarioRepositorio.getAll()
}

async function getById(id){    
    return await proprietarioRepositorio.getById(id)
}

async function deleteProprietario(id){    
    return await proprietarioRepositorio.deleteProprietario(id)
}

export default{
    createProprietario,
    getall,
    getById,
    UpdateProprietario,
    deleteProprietario
}