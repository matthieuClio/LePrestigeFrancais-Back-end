// Database connexion
import pool from "../config/database.js";

// Login
async function loginModel (loginInformations: { email: string }) {
    const { email } = loginInformations;

    const displayUserRequest = await pool.query('SELECT id, email, password_hash FROM users WHERE email = $1', [email]);
    return displayUserRequest.rows[0];
}

export { loginModel };