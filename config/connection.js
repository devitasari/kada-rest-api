const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => console.log('Connected!'));
  
module.exports = mongoose





















// const mongoose = require('mongoose');

// const MONGO_URI = 'mongodb://127.0.0.1:27017/test';

// // Connect to MongoDB
// mongoose.connect(MONGO_URI);

// // Get default connection
// const db = mongoose.connection;

// // 1️⃣ When successfully connected
// db.on('connected', () => {
//   console.log('✅ Mongoose connected to DB');
// });

// // 2️⃣ If error happens
// db.on('error', (err) => {
//   console.error('❌ Mongoose connection error:', err);
// });

// // 3️⃣ When disconnected
// db.on('disconnected', () => {
//   console.log('⚠️ Mongoose disconnected');
// });

// // 4️⃣ When reconnected (after temporary failure)
// db.on('reconnected', () => {
//   console.log('🔄 Mongoose reconnected');
// });

// // 5️⃣ When connection is open (similar to connected)
// db.once('open', () => {
//   console.log('🚀 Mongoose connection open');
// });
