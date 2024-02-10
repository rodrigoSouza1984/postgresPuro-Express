import proprietarioService from "../services/proprietario.service.js";
import animalService from "../services/animal.service.js"

async function createProprietario(req, res){    
    try{
        let proprietario = req.body;
        if (!proprietario.nome || !proprietario.telefone){
            throw new Error("Nome e telefone são obrigatorios")
        }
        res.send(await proprietarioService.createProprietario(proprietario))
    }catch(err){
        console.log(err)
    }
}

async function getAll(req, res){
    try{
        res.send(await proprietarioService.getall())
    }catch(err){
        console.log(err)
    }
}

async function getById(req, res){
    try{
        let id = req.params.id
        res.send(await proprietarioService.getById(id))
    }catch(err){
        console.log(err)
    }
}

async function UpdateProprietario(req, res){
    try{
        let proprietario = req.body;        
        if (!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone){
            throw new Error('Nome Id telefone são obrigatorios')
        }
        res.send(await proprietarioService.UpdateProprietario(proprietario))
    }catch(err){
        console.log(err)
    }
}

async function deleteProprietario(req, res){
    try{
      let id = req.params.id
      
      const proprietario = (await proprietarioService.getById(id))
      
      if(!proprietario){
          return console.log('Proprietario não encontrado')
      }

      const animal = (await animalService.getByIdProprietario(id))
      
      if(animal.length > 0){
        return console.log('Ha animais cadastrados nesse id')
    }      
      
    res.send(await proprietarioService.deleteProprietario(id))
        
    }catch(err){
        throw err
    }
}

export default{
    createProprietario,
    getAll,
    getById,
    UpdateProprietario,
    deleteProprietario
}

