import fse from "fs-extra";
import multer from "multer";
import path from "path";

function uploader(
  allowed_file_types: string[],
  max_file_size: number,
  error_msg: string
) {
  // File upload folder (outside the root folder)
  const UPLOADS_FOLDER = `${__dirname}/../../../images/`;

  // ensure the folder (if the folder doesn't exist, it will create one)
  fse.ensureDirSync(UPLOADS_FOLDER);

  // define the storage
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    },
  });

  // preapre the final multer upload object
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: max_file_size,
    },
    fileFilter: (req, file, cb) => {
      if (allowed_file_types.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error(error_msg));
      }
    },
  });

  return upload;
}

export default uploader;
