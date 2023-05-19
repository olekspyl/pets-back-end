const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils");

const checkAuth = async (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  if (!headerAuth) {
    throw HttpError(401, "Not avtorization");
  }
  const [bearer, token] = await headerAuth.split(" ", 2);
  if (bearer !== "Bearer") {
    throw HttpError(401, "Not avtorization");
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      throw HttpError(401, "Not avrorization");
    }

    req.userId = decoded;
    next();
  });
};

module.exports = checkAuth;
