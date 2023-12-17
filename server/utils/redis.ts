import { Redis } from "ioredis";
import colors from "colors";
colors.enable();
require("dotenv").config();

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log("Redis connected".green.underline);
    return process.env.REDIS_URL;
  }
  throw new Error("Redis connection failed".red);
};

export const redis = new Redis(redisClient());
