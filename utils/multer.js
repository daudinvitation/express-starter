const multer = require("multer");
const path = require("path");

const diskStorage = (storePath) => {
  return multer.diskStorage({
    // folder config to store the files
    destination: function (req, file, cb) {
      // cb(null, "uploads/foto/");
      cb(null, storePath);
    },

    // generate unique file name
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    },
  });
};

module.exports = { multer, diskStorage };
