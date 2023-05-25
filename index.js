const express = require("express");
const cors = require("cors");
const session = require("express-session");
const path = require("path");
const uploads = path.join(__dirname, "uploads");
require("./utils/db");

const app = express();
const port = process.env.PORT || 5000;
// const auth = require("./middleware/auth");
// const login = require("./routes/login");
const dosen = require("./routes/dosen");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// unprotected routes
// app.use("/api/login", login);
app.use("/api/uploads", express.static(uploads));
app.use("/api/dosen", dosen);

// user must login first
// app.use(auth);

// protected routes
// app.use("/api/dosen", dosen);

app.listen(port, () => console.log("Server running at port: " + port));
