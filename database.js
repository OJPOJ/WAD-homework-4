const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "kevin", //add your password
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
        "id" SERIAL PRIMARY KEY,
        "body" VARCHAR(1000) NOT NULL,
        "date" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`;

execute(createTblQuery).then(result1 => {
    if (result1) {
        execute(createPostTblQuery).then(result2 => {
            if (result2) {
                console.log('Table "posts" and table "users" are created');
            }
        });
    }
});

module.exports = pool;