import express from "express";
import mongoose from "mongoose";
import postsRoute from "./routes/posts";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/blog";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("DB connected"));

// app.get("/", (req, res) => {
//   res.send({ message: "Hello" });
// });

app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));
app.use("/posts", postsRoute);

app.listen(port, () => console.log("Server running"));
