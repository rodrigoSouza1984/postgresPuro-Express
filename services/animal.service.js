import animalRepositorio from "../repositories/animal.repository.js"

async function createAnimal(animal){       
    return await animalRepositorio.insertAnimal(animal)
}

async function UpdateAnimal(animal){
    return await animalRepositorio.update(animal)
}

async function getall(){    
    return await animalRepositorio.getAll()
}

async function getById(id){    
    return await animalRepositorio.getById(id)
}

async function getByIdProprietario(idProprietario){    
    return await animalRepositorio.getByIdProprietario(idProprietario)
}

async function deleteAnimal(id){    
    return await animalRepositorio.deleteAnimal(id)
}

export default{
    createAnimal,
    getall,
    getById,
    getByIdProprietario,
    UpdateAnimal,
    deleteAnimal
}