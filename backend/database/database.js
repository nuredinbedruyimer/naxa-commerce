import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("MongoDB connected successfully !!");
  } catch (error) {
    console.log("MongoDB Error : ", error);
  }
};

export default connectDB;
