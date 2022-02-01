import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app is running on port: ${PORT}`);
});
