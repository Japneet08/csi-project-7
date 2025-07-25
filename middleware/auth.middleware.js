const jwt = require('jsonwebtoken');

const verifyToken = function (req, res, next) {
  const token = req.header('Authorization')?.split(" ")[1];
  if (!token) return res.status(401).json({ message: 'Access Denied. No token provided.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // attaches user ID to request
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
