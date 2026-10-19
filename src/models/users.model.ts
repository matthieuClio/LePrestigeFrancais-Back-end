// Connexion database
import pool from "../config/database.js";

async function modelAddUser () {
    const addUserRequest = await pool.query('INSERT INTO users (email, )');
    return addUserRequest.rows;
}

export { modelAddUser };