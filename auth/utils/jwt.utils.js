// Imports
var jwt = require("jsonwebtoken");

/** /!\ This key must never be leaked */
const JWT_SIGN_SECRET = "Gwc9uPu8umUlbZzPI6qWx90vAL9XCc9RAiHs2X3yvghdxYdTSrKZ6JilM417WiR";

// Implementation
module.exports = {
  generateTokenForUser: function (userData) {
    /**
     * returns a 2-hour token
     */
    return jwt.sign(
      {
        userID: userData.id,
      },
      JWT_SIGN_SECRET,
      {
        expiresIn: "2h",
      }
    );
  },

  parseAuthorization: function (authorization) {
    /**
     * Parse token from request
     */
    return authorization != null ? authorization.replace("Bearer ", "") : null;
  },

  verifyToken: function (authorization) {
    /**
     * return "Invalid Token" if token is invalid,
     *         "A token is required for authentication" if no token decteted,
     *          otherwise return token
     */
    var token = module.exports.parseAuthorization(authorization);
    if (token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
      } catch (err) {
        return "Invalid Token";
      }
      return jwtToken;
    }
    return "A token is required for authentication";
  },

  getUserId: function (authorization) {
    /**
     * return userId from token otherwise return null
     */
    var userId = -1;
    var token = module.exports.parseAuthorization(authorization);
    if (token != null) {
      try {
        var jwtToken = jwt.verify(token, JWT_SIGN_SECRET);
        if (jwtToken != null) userId = jwtToken.userID;
      } catch (err) {}
    }
    return userId;
  },
};
