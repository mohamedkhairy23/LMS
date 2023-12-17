import mongoose from "mongoose";
import colors from "colors";
colors.enable();
require("dotenv").config();

const mongoURI: string = process.env.MONGO_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI).then((data: any) => {
      console.log(
        `Mongo database connected with ${data.connection.host}`.cyan.underline
      );
    });
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
