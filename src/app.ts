// Express
import express from 'express';

// Routes
import routerUser from './routes/users.routes.js';

const app = express();

app.use(express.json()); // Parse the body
app.use(express.urlencoded({ extended: true})); // Manage data sent via a standard HTML form

// Default route
app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.use('/users', routerUser);

export default app;