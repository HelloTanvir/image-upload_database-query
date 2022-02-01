import { Request, Response, Router } from "express";
import imageUpload from "../middleware/imageUpload";

const uploadRouter = Router();

uploadRouter.post("/image", imageUpload, (req: Request, res: Response) => {
  res.status(201).send("Image uploaded successfully");
});

export default uploadRouter;
