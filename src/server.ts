// Dotenv
import 'dotenv/config';

// App
import app from './app.js';

// Database connexion
import pool from './config/database.js';

// Port use by the application
const PORT = Number(process.env.EXPRESS_PORT);

// Ensure to start the server with the correct port
function serverStart () {
    // Issues with the port
    if (Number.isNaN(PORT)) {
        return console.log(`Issus with ${PORT}`);

    } else if (!PORT) {
        return console.log(`Issus with ${PORT}`);   

    // The port is correct
    } else {
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`);
        });
    }
}

// We test PostgreSQL connexion
async function testConnexion () {
    try {
        const request = await pool.query('SELECT NOW()');
        console.log(request.rows);

    } catch (error) {
        console.log(error);
    }
}

// Start server
serverStart();
// Test connexion
testConnexion();