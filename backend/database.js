const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "postgres", //add your password
    database: "wad-hw",
    host: "localhost",
    port: "5432"
});

const execute = async(query, query1) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query);
        await pool.query(query1); // executes a query
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

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200), 
        "date" VARCHAR(200) NOT NULL,
        "author" VARCHAR(200) NOT NULL,
        "likes" INT
    );`;

execute(createTblQuery,createTblQuery1).then(result => {
    if (result) {
        console.log('Table "users" and "posttable" is created');
    }
});

module.exports = pool;