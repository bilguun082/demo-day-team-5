const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StreamSchema = new Schema({
  roomName: { type: String },
});

const Streams = mongoose.model("streams", StreamSchema);

module.exports = Streams;
