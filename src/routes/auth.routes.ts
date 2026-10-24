// Express
import express from 'express';

import rateLimit from 'express-rate-limit';

// Middlewares
import { checkBodyMiddleware } from '../middlewares/checkBody.middleware.js';

// Controllers
import { authController } from '../controllers/auth.controller.js';

// Router
const authRouter = express.Router();

// Limiter
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 10,
    message: {message: 'Too many login attempts, please try again later'}
});

// Login
authRouter.post('/login', loginLimiter, checkBodyMiddleware, authController);

// Export
export default authRouter;