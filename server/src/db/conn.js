import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const connection = await mongoose.connection;
    connection.on("connected", () => {
      console.log("connected to db");
    });
    connection.on("error", (err) => {
      console.log("fails to connect", err);
    });
  } catch (e) {
    console.log("error--------", e.message);
  }
};

export default connectDB;
