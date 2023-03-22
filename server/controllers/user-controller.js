const User = require("../models/user-model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const exists = await User.findOne({ email: email });
    if (exists) {
      res.status(400).json("User already Exists !");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        isAdmin: isAdmin,
        picName: req.file.originalname,
        picUrl: req.file.path,
      });
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });
      await user.save();
      res.status(201).json({ message: "User created .", token });
    }
  } catch (err) {
    res.status(400).json(`The error in registerUser is : ${err}`);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const exists = await User.findOne({ email: email });
    if (exists) {
      const passwordMatched = await bcrypt.compare(password, exists.password);
      if (passwordMatched) {
        const token = jwt.sign({ id: exists._id }, process.env.JWT_SECRET_KEY, {
          expiresIn: "1d",
        });
        res.status(200).json({ message: "User created .", token });
      } else {
        res.status(400).json("Incorrect Password !");
      }
    } else {
      res.status(400).json("You need to register !");
    }
  } catch (err) {
    res.status(400).json(`The error in loginUser is : ${err}`);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("name , blogs , picUrl");
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(`The error in getAllUsers is : ${err}`);
  }
};

exports.getSingleUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id })
      .select("name , blogs , picUrl")
      .populate("blogs");
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json(`The error in getSingleUser is : ${err}`);
  }
};
