const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/config.js')

// AUTHENTICATION
const authenticate = (req, res, next) => {
    const token = req.headers.authorization;

    // console.log('Authorization header:', token); // Log the token to verify it's being sent

    if (token) {
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                // console.error('JWT verification failed:', err.message); // Log the error details
                next({ status: 401, message: `token bad: ${err.message}` });
            } else {
                req.decodedJwt = decoded;
                // console.log('Token decoded successfully:', decoded); // Log the decoded token
                next();
            }
        });
    } else {
        // console.error('No token provided in Authorization header'); // Log when no token is provided
        next({ status: 401, message: 'wat? no token?' });
    }
};


module.exports = authenticate
