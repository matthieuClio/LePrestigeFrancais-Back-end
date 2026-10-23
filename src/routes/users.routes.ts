// Express
import express from 'express';

// Middlewares
import { checkBodyMiddleware } from '../middlewares/checkBody.middleware.js';

// Controllers
import { addUserController } from '../controllers/users.controller.js';

// Router
const userRouter = express.Router();

// Add user
userRouter.post('/', checkBodyMiddleware, addUserController);

// Export
export default userRouter;