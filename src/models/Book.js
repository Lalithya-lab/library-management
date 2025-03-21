// import mongoose from "mongoose";

// const BookSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   genre: String,
//   available: { type: Boolean, default: true },
// });

// export default mongoose.models.Book || mongoose.model("Book", BookSchema);


import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
});

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);
export default Book;
