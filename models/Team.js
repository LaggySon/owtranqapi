const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  //Requires custom id value 
  _id: {
    type: String,
    required: true,
  },
  //Link to image
  link: {
    type: String,
    required: true,
  },
  //link to correspond Gsheet
  sheet: {
    type: String,
    required: false,
  },
  players: [
    {
      name: {
        type: String,
        required: true,
      },
      sr: {
        type: Number,
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
    },
  ],
  name: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Teams", TeamSchema);
