// import { connectToDatabase } from "@/lib/mongodb";
// import Book from "@/models/Book";

// export async function GET() {
//   await connectToDatabase();
//   const books = await Book.find({});
//   return Response.json(books);
// }

// export async function POST(req) {
//   await connectToDatabase();
//   const { title, author, genre } = await req.json();
//   const newBook = new Book({ title, author, genre });
//   await newBook.save();
//   return Response.json(newBook, { status: 201 });
// }


import { connectToDatabase } from "@/lib/mongodb";
import Book from "@/models/Book";
import { NextResponse } from "next/server";

export async function GET() {
  await connectToDatabase();
  const books = await Book.find();
  return NextResponse.json({ books });
}

export async function POST(req) {
  try {
    await connectToDatabase();
    const { title, author } = await req.json();

    if (!title || !author) {
      return NextResponse.json({ error: "Title and Author are required!" }, { status: 400 });
    }

    const newBook = new Book({ title, author });
    await newBook.save();

    return NextResponse.json({ message: "Book added successfully!", book: newBook }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error adding book" }, { status: 500 });
  }
}

