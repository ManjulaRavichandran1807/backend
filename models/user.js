const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: String,
  name: String,
  password: String,
  email: String,
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
