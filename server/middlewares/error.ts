import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // Mongoose Bad ObjectId (NotFound 404)
  if (err.name === "castError") {
    const message = `Resource not found`;
    err = new ErrorHandler(message, 404);
  }

  // Mongoose duplicate key (Duplicate Value Error Handling (400))
  if (err.code === 11000) {
    const message = `Duplicate field value entered ${Object.keys(
      err.keyValue
    )}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val: any) => val.message);
    err = new ErrorHandler(message, 400);
  }

  // Wrong jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT expired error
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is expired, try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
