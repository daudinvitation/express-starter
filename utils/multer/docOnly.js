function imgOnly(req, file, callback) {
  const accepts = ["image/jpeg", "application/pdf"];
  if (!accepts.includes(file.mimetype)) {
    // only accepts jpeg & png
    return callback({ message: "Hanya menerima jpeg & pdf" });
  }

  callback(null, true);
}

module.exports = imgOnly;
