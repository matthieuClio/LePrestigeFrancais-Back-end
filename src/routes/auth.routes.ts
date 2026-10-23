// Express
import express from 'express';

// Middlewares
import { checkBodyMiddleware } from '../middlewares/checkBody.middleware.js';

// Controllers
import { authController } from '../controllers/auth.controller.js';

// Router
const authRouter = express.Router();

// Login
authRouter.post('/login', checkBodyMiddleware, authController);

// Export
export default authRouter;