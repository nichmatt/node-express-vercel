const jwt = require("jsonwebtoken");
const sercret_key = "rahasia";

function signToken(payload) {
  return jwt.sign(payload, sercret_key);
}

function verifyToken(token) {
  return jwt.verify(token, sercret_key);
}

module.exports = { signToken, verifyToken };
