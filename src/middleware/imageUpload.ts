import { NextFunction, Request, Response } from "express";
import uploader from "../utils/singleUploader";

const imageUpload = (req: Request, res: Response, next: NextFunction) => {
  const upload = uploader(
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed!"
  );

  upload.single("image")(req, res, (err) => {
    if (err) {
      res.status(500).json({
        message: err.message,
      });
    } else {
      next();
    }
  });
};

export default imageUpload;
