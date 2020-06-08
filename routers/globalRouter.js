import express from "express";
import routes from "../routes.js";
import { home, search } from "../controllers/videoController.js";
import {
    getJoin,
    getLogin,
    logout,
    postJoin,
    postLogin
  } from "../controllers/userController.js";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;