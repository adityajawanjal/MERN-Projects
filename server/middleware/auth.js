const User = require("../models/user-model");
const jwt = require("jsonwebtoken");

exports.auth = async (req, res, next) => {
  try {
    const decoded = jwt.verify(
      req.headers.authorization || req.headers.Authorization,
      process.env.JWT_SECRET_KEY
    );
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(400).json("Error in decoding token.");
    }
  } catch (err) {
    res.status(400).json(`The error in verifyToken is : ${err}`);
  }
};

exports.isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (user.isAdmin === false) {
      res.status(400).json("you are not admin");
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json(`The error in isAdmin is : ${err}`);
  }
};
