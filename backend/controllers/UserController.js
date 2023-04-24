const Users = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.getUsers = async (request, response) => {
  const users = await Users.find();
  response.status(200).json({
    message: "success",
    data: users,
  });
};

exports.createUser = async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(request.body.password, salt);
  try {
    const user = await Users.create({
      username: request.body.username,
      email: request.body.email,
      password: hashed,
    });
    response.status(200).json({
      message: "created successfully",
      data: user,
    });
  } catch (error) {
    response.status(400).json(error.message);
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await Users.findOne({ username });
    const match = await bcrypt.compare(password, user.password);
    console.log(user);
    if (match) {
      const token = jwt.sign(
        {
          username: user.username,
        },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "30m" }
      );
      return res
        .status(200)
        .json({ username: user.username, match: match, token: token });
    } else {
      return res.status(400).json({ message: match });
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
