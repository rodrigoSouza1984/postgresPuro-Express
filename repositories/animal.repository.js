import { connect } from "../bancoDadosConfig/BancoDeDados.js";

async function insertAnimal(animal){

    const animalConnect = await connect()    
    console.log(animal)
    try{
        const sqlCreate = "INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *"
        const values = [animal.nome, animal.tipo, animal.proprietario_id]
        const res = await animalConnect.query(sqlCreate, values)
        return res.rows[0]
    }catch(err){
        throw err
    }finally{
        animalConnect.release()
    }    
}

async function getAll(){
    const animalConnect = await connect()

    try{
        const res = await animalConnect.query("SELECT * FROM animais");
        return res.rows;
    }catch(err){
        console.log(err)
    }finally{
        animalConnect.release()
    }
}

async function getById(id){
    const animalConnect = await connect()

    try{
        const res = await animalConnect.query("SELECT * FROM animais WHERE animal_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        console.log(err)
    }finally{
        animalConnect.release()
    }
}

async function getByIdProprietario(idProprietario){
    const animalConnect = await connect()
    
    try{
        const res = await animalConnect.query("SELECT * FROM animais WHERE proprietario_id = $1", [idProprietario]);
        return res.rows;
    }catch(err){
        console.log(err)
    }finally{
        animalConnect.release()
    }
}

async function update(animal){
    const animalConnect = await connect()    
    try{
        const sqlAnimal = "UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $3 WHERE animal_id = $4 RETURNING *"
        const values = [animal.nome, animal.tipo,animal.proprietario_id, animal.animal_id]
        const res = await animalConnect.query(sqlAnimal, values);
        return res.rows[0]    
    }catch(err){
        console.log(err)
    }finally{
        animalConnect.release()
    }
}

async function deleteAnimal(id){
    const animalConnect = await connect()
    try{       
        await animalConnect.query("DELETE FROM animais WHERE animal_id = $1", [id])        
        return true
    }catch(err){
        throw err;
    }finally{
        animalConnect.release()
    }
}

export default{
    insertAnimal,
    getAll,
    getById,
    getByIdProprietario,
    update,
    deleteAnimal
}