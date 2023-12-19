import { NextFunction, Response } from "express";
import { CatchAsyncError } from "../middlewares/catchAsyncError";
import OrderModel from "../models/order.model";

// create a new order
export const newOrder = CatchAsyncError(async (data: any, res: Response) => {
  const order = await OrderModel.create(data);
  res.status(201).json({
    success: true,
    order,
  });
});
