// Express
import { Request, Response, NextFunction } from "express";

// Models
import { addUserModel, displayUsersByIdModel } from "../models/users.model.js";

async function addUserController (req: Request, res: Response, next: NextFunction) {

    try {
        const userRequest = await addUserModel(req.body);
        res.status(201).json(userRequest);
    
    } catch (error) {
        next(error);
    }
}
 
async function getUserById (req: Request, res: Response, next: NextFunction) {

    const urlCleaned = req.url.replace('/', '');

    try {
        const specificUser = await displayUsersByIdModel(urlCleaned);
        res.json(specificUser);

    } catch (error) {
        next(error);
    }
}

export { addUserController, getUserById };