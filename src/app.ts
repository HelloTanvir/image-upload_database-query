import express from "express";
import uploadRouter from "./route/upload.route";

const app = express();

app.use("/upload", uploadRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
