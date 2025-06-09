const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => { if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }

    req.userId = decoded.id;
    req.userRole = decoded.role; // assuming your payload contains { id: user._id }
    next(); });

};

module.exports = verifyToken;
