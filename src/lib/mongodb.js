// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("Please define MONGODB_URI in .env.local");
// }

// let cached = global.mongoose || { conn: null, promise: null };

// export async function connectToDatabase() {
//   if (cached.conn) return cached.conn;

//   if (!cached.promise) {
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }).then((mongoose) => mongoose);
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }


// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("⚠️ MONGODB_URI is missing in .env.local!");
// }

// let cached = global.mongoose || { conn: null, promise: null };

// export async function connectToDatabase() {
//   if (cached.conn) {
//     console.log("✅ Using existing database connection");
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     console.log("🔄 Connecting to MongoDB...");
//     cached.promise = mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }).then((mongoose) => {
//       console.log("✅ Connected to MongoDB");
//       return mongoose;
//     }).catch((error) => {
//       console.error("❌ MongoDB connection error:", error);
//     });
//   }

//   cached.conn = await cached.promise;
//   return cached.conn;
// }





import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ MONGODB_URI is missing in .env.local!");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) {
    console.log("✅ Using existing database connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("🔄 Connecting to MongoDB...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log("✅ Connected to MongoDB");
      return mongoose;
    }).catch((error) => {
      console.error("❌ MongoDB connection error:", error);
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
