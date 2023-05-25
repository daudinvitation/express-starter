const mongoose = require("mongoose");

const mongourl = process.env.MONGOURL || "mongodb://127.0.0.1:27017/dosen";

// connect to mongodb
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));
