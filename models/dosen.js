const mongoose = require("mongoose");

const Dosen = mongoose.model("Dosen", {
  sName: {
    type: String,
    required: true,
  },
});

module.exports = Dosen;
