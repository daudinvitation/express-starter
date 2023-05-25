const mongoose = require("mongoose");

const mongourl = process.env.MONGOURL || "mongodb://127.0.0.1:27017/dosenjere";

// let oMongoose = null;

const vConnectMongoose = async () => {
  // connect to mongodb
  const oMongoose = await mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const db = oMongoose.connection;
  db.on("error", (error) => console.error(error));
  db.once("open", () => console.log("Database connected"));
};

vConnectMongoose();
