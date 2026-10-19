// Express types
import { Request, Response, NextFunction } from "express";

function checkBodyMiddleware (req: Request, res: Response, next: NextFunction) {
    // Get body user request
    const userData = req.body;

    // Check email and password
    if (!userData.email || !userData.password) {
        return res.status(400).json({
            message: "Email and password aren't define"
        });
    }

    // Check type of name and email data
    if (typeof userData.email !== "string" || typeof userData.password !== "string") {
        return res.status(400).json({
            message: "Email and password aren't string types"
        });
    }

    // Regex rule for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check email format/structure
    if (!emailRegex.test(userData.email)) {
        return res.status(400).json({
            message: "Email doesn't respect a correct format"
        });
    }
    
    // Check length of password
    if (userData.password.length < 12) {
        return res.status(400).json({
            message: "The length of the password must be equal or superior at 12"
        });
    }

    next();
}

export { checkBodyMiddleware }