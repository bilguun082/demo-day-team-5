const express = require("express");
const {
  getStreams,
  createRoom,
  enterRoom,
} = require("../controllers/StreamController");

const streamRouter = express.Router();

streamRouter
  .get("/", getStreams)
  .post("/createRoom", createRoom)
  .get("/enterRoom", enterRoom);

module.exports = streamRouter;
