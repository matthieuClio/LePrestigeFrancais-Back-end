// Express
import express from 'express';

// Middlewares
import { checkBodyMiddleware } from '../controllers/middleware/users.middleware.js';

// Controllers
import { controllerAddUser } from '../controllers/users.controller.js';

// Router
const routerUser = express.Router();

routerUser.post('/', checkBodyMiddleware, controllerAddUser);

// Export
export default routerUser;