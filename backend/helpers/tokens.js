const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expiresIn) => {
  // Generate and return a signed JWT
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: expiresIn,
  });
};
