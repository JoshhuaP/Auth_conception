// Imports
var jwt = require("jsonwebtoken");

/** /!\ This key must never be leaked */
const JWT_SIGN_SECRET = "Gwc9uPu8umUlbZzPI6qWx90vAL9XCc9RAiHs2X3yvghdxYdTSrKZ6JilM417WiR";

// Implementation
module.exports = {
  generateTokenForUser: function (userData) {
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
    return authorization != null ? authorization.replace("Bearer ", "") : null;
  },

  getUserId: function (authorization) {
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
