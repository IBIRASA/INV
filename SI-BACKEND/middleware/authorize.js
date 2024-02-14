const jwt = require('jsonwebtoken');

function authorize(role) {
    return (req, res, next) => {
        const token = req.header('Authorization');

        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - Missing token' });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (decoded.role !== role) {
                return res.status(403).json({ error: 'Forbidden - Insufficient permissions' });
            }

            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }
    };
}

module.exports = authorize;
