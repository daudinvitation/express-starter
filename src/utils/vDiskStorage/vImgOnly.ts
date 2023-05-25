import { Request } from "express";
import { FileFilterCallback } from "multer";

const vImgOnly = (
  req: Request,
  oFile: Express.Multer.File,
  vCallback: FileFilterCallback
) => {
  const accepts = ["image/jpeg", "image/png"];

  if (!accepts.includes(oFile.mimetype)) {
    // only accepts jpeg & png
    return vCallback({
      name: oFile.filename,
      message: "Only accepts jpeg & png",
    });
  }

  vCallback(null, true);
};

export default vImgOnly;
