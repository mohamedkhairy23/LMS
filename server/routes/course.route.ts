import express from "express";
import { addCourse } from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middlewares/auth";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  addCourse
);

export default courseRouter;
