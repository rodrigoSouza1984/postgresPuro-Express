import pg from "pg";

async function connect() {
    if (global.connection){
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "add string postgres conection - postgres://...."
    });
    
    global.connection = pool;

    return pool.connect();
}

export {
    connect
}
