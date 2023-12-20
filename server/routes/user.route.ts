import express from "express";
import {
  activateUser,
  getAllUsers,
  getUserInfo,
  login,
  logout,
  register,
  socialAuth,
  updateAccessToken,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRoles, isAuthenticated } from "../middlewares/auth";
const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/activate-user", activateUser);
userRouter.post("/login", login);
userRouter.get("/logout", isAuthenticated, logout);
userRouter.get("/refresh", isAuthenticated, updateAccessToken);
userRouter.get("/me", isAuthenticated, getUserInfo);
userRouter.post("/social-auth", socialAuth);
userRouter.put("/update-user-info", isAuthenticated, updateUserInfo);
userRouter.put("/update-user-password", isAuthenticated, updatePassword);
userRouter.put("/update-user-avatar", isAuthenticated, updateProfilePicture);
userRouter.get(
  "/get-all-users",
  isAuthenticated,
  authorizeRoles("admin"),
  getAllUsers
);
userRouter.put(
  "/update-user-role",
  isAuthenticated,
  authorizeRoles("admin"),
  updateUserRole
);

export default userRouter;
