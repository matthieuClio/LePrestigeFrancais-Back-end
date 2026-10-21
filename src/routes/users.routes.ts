// Express
import express from 'express';

// Middlewares
import { checkBodyMiddleware } from '../middleware/users.middleware.js';

// Controllers
import { addUserController, loginUserController } from '../controllers/users.controller.js';

// Router
const routerUser = express.Router();

routerUser.post('/', checkBodyMiddleware, addUserController);

routerUser.get('/:id', loginUserController);

// Export
export default routerUser;