// Express
import { Request, Response, NextFunction } from "express";

// Models
import { addUserModel, showUserById } from "../models/users.model.js";

// Add user
async function addUserController (req: Request, res: Response, next: NextFunction) {

    try {
        const userRequest = await addUserModel(req.body);
        res.status(201).json(userRequest);
    
    } catch (error) {
        next(error);
    }
}

// Show informations user
async function showUserController (req: Request, res: Response, next: NextFunction) {
    const idUser = req.user?.id

    if (!idUser) {
        return res.status(401).json({
            message: 'ID is not define'
        });
    }

    try {
        const userRequest = await showUserById(idUser);
        res.json(userRequest);

    } catch (error) {
        next(error);
    }
}

export { addUserController, showUserController };