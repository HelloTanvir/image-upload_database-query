import express from "express";
import insertRouter from "./route/insert.route";
import uploadRouter from "./route/upload.route";

const app = express();

// parse request body
app.use(express.json());

app.use("/upload", uploadRouter);
app.use("/insert", insertRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
