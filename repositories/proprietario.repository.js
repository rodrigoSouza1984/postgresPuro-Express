import { connect } from "../bancoDadosConfig/BancoDeDados.js";

async function insertProprietario(proprietario){

    const proprietarioConnect = await connect()    
    try{
        const sqlCreate = "INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *"
        const values = [proprietario.nome, proprietario.telefone]
        const res = await proprietarioConnect.query(sqlCreate, values)
        return res.rows
    }catch(err){
        throw err
    }finally{
        proprietarioConnect.release()
    }    
}

async function getAll(){
    const proprietarioConnect = await connect()

    try{
        const res = await proprietarioConnect.query("SELECT * FROM proprietarios");
        return res.rows;
    }catch(err){
        console.log(err)
    }finally{
        proprietarioConnect.release()
    }
}

async function getById(id){
    const proprietarioConnect = await connect()

    try{
        const res = await proprietarioConnect.query("SELECT * FROM proprietarios WHERE proprietario_id = $1", [id]);
        return res.rows[0];
    }catch(err){
        console.log(err)
    }finally{
        proprietarioConnect.release()
    }
}

async function update(proprietario){
    const proprietarioConnect = await connect()    
    try{
        const sqlProprietario = "UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *"
        const values = [proprietario.nome, proprietario.telefone, proprietario.proprietario_id]
        const res = await proprietarioConnect.query(sqlProprietario, values);
        return res.rows[0]    
    }catch(err){
        console.log(err)
    }finally{
        proprietarioConnect.release()
    }
}

async function deleteProprietario(id){
    const proprietarioConnect = await connect()
    try{       
        await proprietarioConnect.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id])        
        return true
    }catch(err){
        throw err;
    }finally{
        proprietarioConnect.release()
    }
}

export default{
    insertProprietario,
    getAll,
    getById,
    update,
    deleteProprietario
}