// Express
import { Request, Response, NextFunction } from "express";

// Models
import { modelAddUser } from "../models/users.model.js";

async function controllerAddUser (req: Request, res: Response, next: NextFunction) {
    

    // try {
    //     const userRequest = await modelAddUser();
    //     res.json(userRequest);
    
    // } catch (error) {
    //     next(error);
    // }
}

export { controllerAddUser };