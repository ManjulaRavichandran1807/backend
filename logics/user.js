const { UserModel } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async ({ name, password, email }) => {
  if (!name || password || email)
    throw new Error("Please provide neccessary details");

  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  await UserModel.create({ name, password: hash, email });

  return {
    message: "Signup Successful",
  };
};

const login = async ({ email, password }) => {
  if (!email || !password) throw new Error("Login details not available");

  const user = await UserModel.findOne({ email });

  if (!user) throw new Error("User not available");

  const validatePassword = await bcrypt.compare(password, user.password);

  if (!validatePassword) throw new Error("Incorrect Password");

  const token = jwt.sign(
    {
      date: new Date(),
      data: {
        email,
        id: user._id,
      },
    },
    process.env.JWTSECRET,
    { expiresIn: "24h" }
  );

  return {
    token,
    id: user._id,
    message: "Login Successful",
  };
};

module.exports = {
  signup,
  login,
};
