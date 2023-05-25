const jwt = require("jsonwebtoken");

const secretToken = process.env.SECRET_TOKEN || "UNTAG-FOREVER";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.replace("Bearer ", "");

    if (!token) {
      return res.status(403).json({ message: "Maaf, anda belum login" });
    }

    try {
      const decoded = jwt.verify(token, secretToken);
      req.user = decoded;
    } catch {
      return res
        .status(401)
        .json({ message: "Maaf, anda tidak diijinkan mengakses halaman ini" });
    }
  } catch {
    return res.status(401).json({ message: "Maaf, file tidak ditemukan" });
  }

  return next();
};

module.exports = verifyToken;
