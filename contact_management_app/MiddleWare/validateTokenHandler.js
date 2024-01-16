const jwt = require('jsonwebtoken');

const validateToken = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    // Fix the typo: startWith -> startsWith
    token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401);
      throw new Error('User is not authorized');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error('User is not authorized');
      }

      // Attach the decoded user information to the request
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error('User is not authorized');
  }
};

module.exports = validateToken;
