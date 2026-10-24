// Express
import express from 'express';

// Middlewares
import errorMiddleware from './middlewares/error.middleware.js';

// Routes
import userRouter from './routes/users.routes.js';
import authRouter from './routes/auth.routes.js';

// Application
const app = express();

app.use(express.json()); // Parse the body
app.use(express.urlencoded({ extended: true})); // Manage data sent via a standard HTML form

// Default route
app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

// Users
app.use('/users', userRouter);

// Auth
app.use('/auth', authRouter);

// Error middleware
app.use(errorMiddleware);

export default app;