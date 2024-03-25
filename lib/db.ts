import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const connect = async () => {
  const connectionState = mongoose.connection.readyState;
  if (connectionState === 1) {
    console.log("MongoDB is already connected");
    return;
  }
  if (connectionState === 2) {
    console.log("MongoDB is connecting");
    return;
  }
  try {
    mongoose.connect(MONGODB_URI!, {
      dbName: "restAPI",
      bufferCommands: false,
    });
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("error connecting to MongoDB", error);
    throw new Error("error connecting to MongoDB");
  }
};

export default connect;
