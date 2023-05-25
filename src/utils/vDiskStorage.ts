import multer from "multer";
import path from "path";

const vDiskStorage = (sStorePath: string) => {
  return multer.diskStorage({
    // folder config to store the files
    destination: function (req, file, cb) {
      // cb(null, "uploads/foto/");
      cb(null, sStorePath);
    },

    // generate unique file name
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  });
};

export default vDiskStorage;
