// Express
import { Request, Response, NextFunction } from "express";

// Models
import { addUserModel, loginModel } from "../models/users.model.js";

// Bcrypt
import bcrypt from 'bcrypt';

async function addUserController (req: Request, res: Response, next: NextFunction) {

    try {
        const userRequest = await addUserModel(req.body);
        res.status(201).json(userRequest);
    
    } catch (error) {
        next(error);
    }
}
 
async function loginUserController (req: Request, res: Response, next: NextFunction) {

    // Get body user
    const userBody = req.body;

     try {
        // Get the user requested
        const login = await loginModel(userBody);

        // User not found
        if (!login) {
            return res.status(404).json({
                message: 'Login has fail, user not found'
            });
        }
        
        // Login
        const loginChecked = await bcrypt.compare(userBody.password, login.password_hash);

        // Login failed
        if (!loginChecked) {
            return res.status(401).json({
                message: 'Incorrect password'
            })
        }
        // Login success
        res.json({
            id: login.id,
            email: login.email,
            message: 'Login success'
        });


    } catch (error) {
        next(error);
    }
}

export { addUserController, loginUserController };