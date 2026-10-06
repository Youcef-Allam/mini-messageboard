import { Router } from "express";
import getIndex from "../controllers/indexController.js";
import {
  getForm,
  postForm,
  getMessage,
} from "../controllers/indexController.js";

const indexRouter = Router();

indexRouter.get("/", getIndex);

indexRouter.get("/new", getForm);

indexRouter.post("/new", postForm);

indexRouter.get("/messages/:messageId", getMessage);

export default indexRouter;
