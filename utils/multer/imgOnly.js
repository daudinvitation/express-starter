function imgOnly(req, file, callback) {
  const accepts = ["image/jpeg", "image/png"];
  if (!accepts.includes(file.mimetype)) {
    // only accepts jpeg & png
    return callback({ message: "Hanya menerima jpeg & png" });
  }

  callback(null, true);
}

module.exports = imgOnly;
