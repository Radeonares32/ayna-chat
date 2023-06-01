import express, { Handler } from "express";

const app = express.Router();

//user routes
import {
  getFindAllUserRoute,
  getFindByIdUserRoute,
  getFindByUsernameUserRoute,
  postCreateUserRoute,
} from "../../../../modules/users/infra/http/routes/UserRoutes";

export const userRoutes: Handler = app.use(
  "/users",
  getFindAllUserRoute,
  getFindByIdUserRoute,
  getFindByUsernameUserRoute,
  postCreateUserRoute
);