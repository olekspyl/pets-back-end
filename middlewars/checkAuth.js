const jwt = require("jsonwebtoken");
const { HttpError } = require("../utils");

const checkAuth = async (req, res, next) => {
  const headerAuth = req.headers.authorization || "";

  if (!headerAuth) {
    return next(HttpError(401, "Not authorized"));
  }

  const [bearer, token] = await headerAuth.split(" ", 2);

  if (bearer !== "Bearer" || !token) {
    return next(HttpError(401, "Not authorized"));
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return next(HttpError(401, "Not authorized"));
    }

    req.userId = decoded;

    next();
  });

  // try {
  //   const { id } = jwt.verify(token, process.env.SECRET_KEY);
  //   console.log("5");

  //   console.log("6");

  //   req.userId = { id };
  //   console.log("7");

  //   next();
  // } catch (error) {
  //   console.log("er1");
  //   next(HttpError(401, "Not authorized"));
  // }
};

module.exports = checkAuth;
