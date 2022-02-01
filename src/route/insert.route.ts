import { Router } from "express";
import { insertIntoBothTables } from "../controller/insert.controller";

const insertRouter = Router();

insertRouter.post("/", insertIntoBothTables);

export default insertRouter;
