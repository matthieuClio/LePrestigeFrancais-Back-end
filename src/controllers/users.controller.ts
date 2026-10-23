// Express
import { Request, Response, NextFunction } from "express";

// Models
import { addUserModel } from "../models/users.model.js";

// Add user
async function addUserController (req: Request, res: Response, next: NextFunction) {

    try {
        const userRequest = await addUserModel(req.body);
        res.status(201).json(userRequest);
    
    } catch (error) {
        next(error);
    }
}

export { addUserController };