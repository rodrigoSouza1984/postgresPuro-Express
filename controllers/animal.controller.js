import animalService from "../services/animal.service.js";

async function createAnimal(req, res){    

    try{
        let animal = req.body;        
        if (!animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error("Nome tipo e proprietario_id são obrigatorios")
        }
        res.send(await animalService.createAnimal(animal))
    }catch(err){
        console.log(err)
    }
}

async function getAll(req, res){
    try{
        res.send(await animalService.getall())
    }catch(err){
        console.log(err)
    }
}

async function getById(req, res){
    try{
        let id = req.params.id
        res.send(await animalService.getById(id))
    }catch(err){
        console.log(err)
    }
}

async function getByIdProprietario(req, res){
    try{
        let idProprietario = req.params.id        
        res.send(await animalService.getByIdProprietario(idProprietario))
    }catch(err){
        console.log(err)
    }
}

async function UpdateAnimal(req, res){
    try{
        let animal = req.body;               
        if (!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id){
            throw new Error('Nome Id tipo e proprietario_id são obrigatorios')
        }
        res.send(await animalService.UpdateAnimal(animal))
    }catch(err){
        console.log(err)
    }
}

async function deleteAnimal(req, res){
    try{
      let id = req.params.id
      const animal = (await animalService.getById(id))
      
      if(!animal){
          return console.log('Animal não encontrado')
      }

      //depois que criar a tabela animal vamos
      //criar uma verificacao aki que so deleta
      //o animal se nao houver animal cadastrado 
      //relacionado ao animal
      
      res.send(await animalService.deleteAnimal(id))
        
    }catch(err){
        throw err
    }
}

export default{
    createAnimal,
    getAll,
    getById,
    getByIdProprietario,
    UpdateAnimal,
    deleteAnimal
}

