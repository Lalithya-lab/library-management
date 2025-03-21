// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   await connectToDatabase();
//   const { email, password } = await req.json();
//   const user = await User.findOne({ email });

//   if (!user) return Response.json({ error: "User not found" }, { status: 401 });

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) return Response.json({ error: "Invalid password" }, { status: 401 });

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });

//   return Response.json({ token });
// }



// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in login API");

//     const { email, password } = await req.json();
//     console.log("📩 Login attempt:", email);

//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("❌ User not found:", email);
//       return Response.json({ error: "Invalid email or password!" }, { status: 401 });
//     }

//     const isPasswordValid = await compare(password, user.password);
//     if (!isPasswordValid) {
//       console.log("❌ Incorrect password for:", email);
//       return Response.json({ error: "Invalid email or password!" }, { status: 401 });
//     }

//     // Generate a JWT token
//     const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });

//     console.log("✅ Login successful:", email);

//     return Response.json({ message: "Login successful!", token }, { status: 200 });
//   } catch (error) {
//     console.error("❌ Login Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }



// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { compare } from "bcryptjs";
// import jwt from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in login API");

//     const { email, password } = await req.json();
//     console.log("📩 Login attempt:", email);

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       console.log("❌ User not found:", email);
//       return Response.json({ error: "Invalid email or password!" }, { status: 401 });
//     }

//     // Validate the password
//     const isPasswordValid = await compare(password, user.password);
//     if (!isPasswordValid) {
//       console.log("❌ Incorrect password for:", email);
//       return Response.json({ error: "Invalid email or password!" }, { status: 401 });
//     }

//     // Generate a JWT token including user ID, email, and role
//     const token = jwt.sign(
//       { userId: user._id, email: user.email, role: user.role }, // Include role
//       process.env.JWT_SECRET,
//       { expiresIn: "1h" }
//     );

//     console.log("✅ Login successful:", email, "| Role:", user.role);

//     return Response.json(
//       { message: "Login successful!", token, user: { email: user.email, role: user.role } }, 
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ Login Error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }





// import { connectToDatabase } from "@/lib/mongodb";
// import User from "@/models/User";
// import { compare } from "bcryptjs";
// import { sign } from "jsonwebtoken";

// export async function POST(req) {
//   try {
//     await connectToDatabase();
//     console.log("🔄 Connected to DB in login API");

//     const { email, password } = await req.json();
//     console.log("📩 Login attempt:", email);

//     const user = await User.findOne({ email });

//     if (!user) {
//       console.log("❌ User not found:", email);
//       return Response.json({ error: "Invalid credentials!" }, { status: 401 });
//     }

//     // Validate password
//     const isMatch = await compare(password, user.password);
//     if (!isMatch) {
//       console.log("❌ Invalid password for:", email);
//       return Response.json({ error: "Invalid credentials!" }, { status: 401 });
//     }

//     console.log(`✅ Login successful: ${email} | Role: ${user.role}`);

//     // Generate JWT (optional)
//     const token = sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     return Response.json(
//       { message: "Login successful!", user: { email: user.email, role: user.role }, token },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("❌ Login error:", error);
//     return Response.json({ error: "Something went wrong!" }, { status: 500 });
//   }
// }




import { connectToDatabase } from "@/lib/mongodb";
import User from "@/models/User";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export async function POST(req) {
  try {
    await connectToDatabase();
    console.log("🔄 Connected to DB in login API");

    const { email, password } = await req.json();
    console.log("📩 Login attempt:", email);

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found:", email);
      return Response.json({ error: "Invalid credentials!" }, { status: 401 });
    }

    console.log("🛠 Found User:", user); // DEBUGGING LINE

    // Validate password
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Invalid password for:", email);
      return Response.json({ error: "Invalid credentials!" }, { status: 401 });
    }

    console.log(`✅ Login successful: ${email} | Role: ${user.role}`);

    // Generate JWT (optional)
    const token = sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return Response.json(
      { message: "Login successful!", user: { email: user.email, role: user.role }, token },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Login error:", error);
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
