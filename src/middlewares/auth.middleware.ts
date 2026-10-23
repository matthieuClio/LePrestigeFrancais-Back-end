// Express 
import { Request, Response, NextFunction } from 'express';

// Jasonwebtoken
import jwt from 'jsonwebtoken';

function authMiddleware (req: Request, res: Response, next: NextFunction) {
    const authHeaders = req.headers.authorization;

    // Authorization isn't given
    if (!authHeaders) {
        return res.status(401).json({
            message: 'Authorization missing'
        });
    }

    const [scheme, token] = authHeaders.split(' ');

    // Check authorization format
    if (scheme !== 'Bearer' || !token) {

        return res.status(401).json({
            message: 'Authorization format is not valid'
        });
    }

    // Check JWT_SECRET
    if (!process.env.JWT_SECRET) {
        return res.status(500).json({
            message: 'JWT_SECRET is not define'
        });
    }

    try {
        // Verify the token (raise an error if the token is incorrecte)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check format of decoded (for TypeScript)
        if (typeof decoded !== 'object' || decoded === null || typeof decoded.id !== 'number') {

            return res.status(401).json({ 
                message: 'Invalid token' 
            });
        }

        // Add payload in req
        req.user = { id: decoded.id };
        next();

    } catch (error) {
        next(error);
    }
}

export { authMiddleware };