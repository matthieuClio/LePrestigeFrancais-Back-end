// Express
import { Request, Response, NextFunction } from 'express';

// Jsonwebtoken
import jwt from 'jsonwebtoken';

function errorMiddleware (error: unknown, req: Request, res: Response, next: NextFunction) {

    // Headers already sent
    if (res.headersSent) {
        return next(error)
    }

    // Handle invalid or expired JWTs
    if (error instanceof jwt.JsonWebTokenError || error instanceof jwt.TokenExpiredError) {

        return res.status(401).json({
            message: 'Invalid or expired token'
        });
    }

    // Generic error response
    return res.status(500).json({
        message: 'Internal server error'
    });
}

export default errorMiddleware;