// Connexion database
import pool from "../config/database.js";

// Bcrypt
import bcrypt from 'bcrypt';

async function addUserModel (userReq: {email: string, password: string}) {
    const {email, password } = userReq;
    
    const passwordHashed = await bcrypt.hash(password, 10);

    const addUserRequest = await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING id, email', [email, passwordHashed]);
    return addUserRequest.rows[0];
}

async function displayUsersByIdModel (idUser: number) {
    const displayUserRequest = await pool.query('SELECT id, email FROM users WHERE id = $1', [idUser]);
    return displayUserRequest.rows[0];
}

export { addUserModel, displayUsersByIdModel };