import pg from "pg";

async function connect() {
    if (global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "postgres://zezxeiuu:2hubq3AVRr4d3zR818Qrz6K_NvpmyQDI@ruby.db.elephantsql.com/zezxeiuu"
    });
    
    global.connection = pool;

    return pool.connect();
}

export {
    connect
}