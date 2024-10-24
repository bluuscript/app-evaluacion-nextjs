import { connection } from "mongoose";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const { Connection } = await mongoose.connect(
      process.env.MONGODB_URI as string,
    );
    if (connection.readyState == 1) {
      console.log("MongoDB Conectada");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error("error conectando a MOGODB");
    return Promise.reject(false);
  }
};

export default connectDB;
