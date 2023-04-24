const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

const Users = mongoose.model("user", UserSchema);

module.exports = Users;
