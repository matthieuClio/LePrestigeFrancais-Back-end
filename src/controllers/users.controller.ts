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
 
async function loginUserController (req: Request, res: Response, next: NextFunction) {

    // Get id from url
    const idUrl = Number(req.params.id);

    // Check if the id is valid
    if (typeof idUrl !== "number" || idUrl < 0) {

        return res.status(400).json({
            message: "he ID is not a number or it is lower than 0"
        });
    }

    try {
        // Get the user requested
        const specificUser = await displayUsersByIdModel(idUrl);

        // User not found
        if (!specificUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        // User found
        res.json(specificUser);

    } catch (error) {
        next(error);
    }
}

export { addUserController, loginUserController };