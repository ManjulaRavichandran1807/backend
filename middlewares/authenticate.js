const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const { authorization } = req.headers;
  const token =
    authorization && authorization.split(" ")[1]
      ? authorization.split(" ")[1]
      : "";
  jwt.verify(token, process.env.JWTSECRET, function (err, decoded) {
    if (err) res.status(401).send(err);
    else {
      console.log(decoded);
      res.locals.id = decoded.data.userId;
      next();
    }
  });
};

module.exports = authentication;
