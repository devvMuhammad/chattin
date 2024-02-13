import mongoose from "mongoose";

// maintaining a cached connection to prevent reconnection
let cached = (global as any).mongoose;
// reset the connection if it doesnt exist
if (!cached) {
  cached = (global as any).mongoose = null;
}

export async function connectDB() {
  // return the cache if it exists
  if (cached) {
    return cached;
  }
  // make the connection and cache it
  const requestURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@chatcluster.pr6erxq.mongodb.net/app`;
  cached = await mongoose.connect(requestURL);
  if (cached) console.log("A connection was established to the databse");
  return cached;
}
