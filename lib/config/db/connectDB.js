import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URL = process.env.MONGO_URL;
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.log("❌ Failed to connect to MongoDB");
    console.log(error.message);
  }
};

export default connectDB;
