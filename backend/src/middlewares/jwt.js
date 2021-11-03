require('dotenv').config();
const jwt = require("jsonwebtoken");


const verify_jwt = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) return res.status(401).json({ error: 'Token not found / Empty token.' });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(500).json({ error: 'Unauthenticated token.' });
        }
        req.user_id = decoded.user;
        next();
    });
}

module.exports = verify_jwt;
