const mongoose = require("mongoose")

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected")
  } catch (err) {
    console.log("MongoDB not ready, retrying...")
    setTimeout(connectDB, 5000)
  }
}

module.exports = { connectDB }