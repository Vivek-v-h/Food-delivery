import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vivekmusic19:T4uqrM1E2c3ycwqH@cluster0.ymsef.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => {
      console.log("DB connected");
    });
};
//vivekmusic19:T4uqrM1E2c3ycwqH
