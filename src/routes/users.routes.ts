// Express
import express from 'express';

// Middlewares
import { checkBodyMiddleware } from '../middlewares/checkBody.middleware.js';
import  { authMiddleware } from '../middlewares/auth.middleware.js';

// Controllers
import { addUserController, showUserController } from '../controllers/users.controller.js';

// Router
const userRouter = express.Router();

// Add user
userRouter.post('/', checkBodyMiddleware, addUserController);

// Show informations user
userRouter.get('/:id', authMiddleware, showUserController);

// Export
export default userRouter;