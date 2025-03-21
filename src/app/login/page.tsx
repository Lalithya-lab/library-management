// "use client";
// import { Box, Container, TextField, Typography, Button } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container
//         maxWidth="xs"
//         sx={{
//           bgcolor: "rgba(255, 255, 255, 0.85)",
//           padding: 4,
//           borderRadius: 2,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           🔐 Login
//         </Typography>

//         <TextField fullWidth label="Email" type="email" margin="normal" />
//         <TextField fullWidth label="Password" type="password" margin="normal" />

//         <Button
//           variant="contained"
//           sx={{ bgcolor: "#006400", color: "white", marginTop: 2 }}
//           fullWidth
//         >
//           Login
//         </Button>

//         <Typography variant="body2" sx={{ marginTop: 2 }}>
//           Don’t have an account?{" "}
//           <span
//             style={{ color: "#006400", cursor: "pointer" }}
//             onClick={() => router.push("/register")}
//           >
//             Register here
//           </span>
//         </Typography>
//       </Container>
//     </Box>
//   );
// }


// "use client";
// import { useState } from "react";
// import { Box, Container, TextField, Typography, Button, Alert } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Login failed!");
//       } else {
//         localStorage.setItem("token", data.token); // Store token in localStorage
//         router.push("/dashboard"); // Redirect to dashboard
//       }
//     } catch (err) {
//       console.error("❌ Login error:", err);
//       setError("Something went wrong!");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container
//         maxWidth="xs"
//         sx={{
//           bgcolor: "rgba(255, 255, 255, 0.85)",
//           padding: 4,
//           borderRadius: 2,
//           textAlign: "center",
//         }}
//       >
//         <Typography variant="h4" gutterBottom>
//           🔑 Login
//         </Typography>

//         {error && <Alert severity="error">{error}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             name="email"
//             margin="normal"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             margin="normal"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }}
//             fullWidth
//           >
//             Login
//           </Button>
//         </form>
//       </Container>
//     </Box>
//   );
// }


// /app/login/page.tsx
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, TextField, Typography, Button } from "@mui/material";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     setError("");
//     const res = await fetch("/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });
    
//     const data = await res.json();
//     if (!res.ok) {
//       setError(data.error || "Login failed");
//       return;
//     }
    
//     // Redirect based on role
//     if (data.user.role === "librarian") {
//       router.push("/librarian-dashboard");
//     } else {
//       router.push("/user-dashboard");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container
//         maxWidth="xs"
//         sx={{ bgcolor: "rgba(255, 255, 255, 0.85)", padding: 4, borderRadius: 2, textAlign: "center" }}
//       >
//         <Typography variant="h4" gutterBottom>
//           🔑 Login
//         </Typography>

//         {error && <Typography color="error">{error}</Typography>}

//         <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

//         <Button
//           variant="contained"
//           sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }}
//           fullWidth
//           onClick={handleLogin}
//         >
//           Login
//         </Button>
//       </Container>
//     </Box>
//   );
// }


"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, TextField, Typography, Button } from "@mui/material";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setError("");
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("Login Response:", data); // Debugging log

      if (!res.ok || !data.user) {
        setError(data.error || "Invalid credentials.");
        return;
      }

      // Ensure user has a role before redirecting
      if (data.user?.role === "librarian") {
        router.push("/librarian-dashboard");
      } else if (data.user?.role === "user") {
        router.push("/user-dashboard");
      } else {
        setError("User role is not defined.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/library-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{ bgcolor: "rgba(255, 255, 255, 0.85)", padding: 4, borderRadius: 2, textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          🔑 Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Password" type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button
          variant="contained"
          sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }}
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </Container>
    </Box>
  );
}
