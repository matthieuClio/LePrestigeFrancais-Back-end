// Express
import { Request, Response, NextFunction } from "express";

// Models
import { addUserModel, loginModel } from "../models/users.model.js";

// Bcrypt
import bcrypt from 'bcrypt';

// Jsonwebtoken
import jwt from 'jsonwebtoken';

// Dotenv
import 'dotenv/config';

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
        // Get user informations
        const login = await loginModel(userBody);

        // User not found
        if (!login) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
        
        // Login
        const loginChecked = await bcrypt.compare(userBody.password, login.password_hash);

        // Login failed
        if (!loginChecked) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        // Check JWT_SECRET
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({
                message: 'JWT_SECRET is not define'
            });
        }

        // Login success
        // Define a token
        const token = jwt.sign(
            { id: login.id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            token: token
        });

    } catch (error) {
        next(error);
    }
}

export { addUserController, loginUserController };