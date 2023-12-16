import express from "express";
import {
  activateUser,
  login,
  logout,
  register,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", login);
userRouter.post("/logout", isAuthenticated, logout);

export default userRouter;
