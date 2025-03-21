// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   await connectToDatabase();
//   const { name, email, password } = await req.json();
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const newUser = new User({ name, email, password: hashedPassword });
//     await newUser.save();
//     return Response.json({ message: "User registered successfully" }, { status: 201 });
//   } catch (error) {
//     return Response.json({ error: "Error registering user" }, { status: 500 });
//   }
// }


// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { hash } from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectToDatabase(); // Ensure DB connection

//     const { name, email, password } = await req.json();

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Hash password and save user
//     const hashedPassword = await hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();

//     return Response.json({ message: "User registered successfully!" }, { status: 201 });
//   } catch (error) {
//     console.error("Error registering user:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }


// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { hash } from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in register API");

//     const { name, email, password } = await req.json();
//     console.log("📩 Received data:", { name, email });

//     // Check if email already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("❌ User already exists:", email);
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Hash password and save user
//     const hashedPassword = await hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     console.log("✅ User registered:", newUser);

//     return Response.json({ message: "User registered successfully!" }, { status: 201 });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }







// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { hash } from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in register API");

//     const { name, email, password } = await req.json();
//     console.log("📩 Received data:", { name, email });

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("❌ User already exists:", email);
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Hash password before saving
//     const hashedPassword = await hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword });

//     await newUser.save();
//     console.log("✅ User registered:", newUser);

//     return Response.json({ message: "User registered successfully!" }, { status: 201 });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }




// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { hash } from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in register API");

//     const { name, email, password, role } = await req.json(); // Accept role
//     console.log("📩 Received data:", { name, email, role });

//     // Validate role (only 'user' or 'librarian' allowed)
//     if (!["user", "librarian"].includes(role)) {
//       console.log("❌ Invalid role:", role);
//       return Response.json({ error: "Invalid role selected!" }, { status: 400 });
//     }

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("❌ User already exists:", email);
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Hash password before saving
//     const hashedPassword = await hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role }); // Store role in DB

//     await newUser.save();
//     console.log("✅ User registered:", newUser);

//     return Response.json({ message: "User registered successfully!" }, { status: 201 });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }



// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { hash } from "bcryptjs";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in register API");

//     const { name, email, password, role } = await req.json();
//     console.log("📩 Received data:", { name, email, role });

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       console.log("❌ User already exists:", email);
//       return Response.json({ error: "User already exists!" }, { status: 400 });
//     }

//     // Set default role if not provided
//     const userRole = role || "user"; // Default role = "user"

//     // Hash password before saving
//     const hashedPassword = await hash(password, 10);
//     const newUser = new User({ name, email, password: hashedPassword, role: userRole });

//     await newUser.save();
//     console.log("✅ User registered:", newUser);

//     return Response.json({ message: "User registered successfully!" }, { status: 201 });
//   } catch (error) {
//     console.error("❌ Registration Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }




import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { hash } from "bcryptjs";

export async function POST(req) {
  try {
    await connectToDatabase();
    console.log("🔄 Connected to DB in register API");

    const { name, email, password, role } = await req.json();
    console.log("📩 Received data:", { name, email, role });

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists:", email);
      return Response.json({ error: "User already exists!" }, { status: 400 });
    }

    // Hash password before saving
    const hashedPassword = await hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });

    await newUser.save();
    console.log("✅ User registered:", newUser);

    return Response.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
