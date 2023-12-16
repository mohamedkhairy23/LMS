import express from "express";
import {
  activateUser,
  login,
  logout,
  register,
  updateAccessToken,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", login);
userRouter.get("/logout", isAuthenticated, logout);
userRouter.get("/refresh", isAuthenticated, updateAccessToken);

export default userRouter;
