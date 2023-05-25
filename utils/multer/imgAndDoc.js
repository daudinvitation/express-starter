function imgOnly(req, file, callback) {
  const accepts = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.ms-powerpoint",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ];
  if (!accepts.includes(file.mimetype)) {
    // only accepts jpeg & png
    return callback({ message: "Hanya menerima jpeg & png" });
  }

  callback(null, true);
}

module.exports = imgOnly;
