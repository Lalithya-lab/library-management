// "use client";
// import { Box, Container, TextField, Typography, Button } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
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
//           📚 Register
//         </Typography>

//         <TextField fullWidth label="Full Name" margin="normal" />
//         <TextField fullWidth label="Email" type="email" margin="normal" />
//         <TextField fullWidth label="Password" type="password" margin="normal" />

//         <Button
//           variant="contained"
//           sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }}
//           fullWidth
//         >
//           Register
//         </Button>

//         <Typography variant="body2" sx={{ marginTop: 2 }}>
//           Already have an account?{" "}
//           <span
//             style={{ color: "#8B0000", cursor: "pointer" }}
//             onClick={() => router.push("/login")}
//           >
//             Login here
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

// export default function RegisterPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Registration failed!");
//       } else {
//         setSuccess("Registration successful! Redirecting...");
//         setTimeout(() => router.push("/login"), 2000);
//       }
//     } catch (err) {
//       console.error("❌ Request error:", err);
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
//           📚 Register
//         </Typography>

//         {error && <Alert severity="error">{error}</Alert>}
//         {success && <Alert severity="success">{success}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="name"
//             margin="normal"
//             value={formData.name}
//             onChange={handleChange}
//           />
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
//             Register
//           </Button>
//         </form>

//         <Typography variant="body2" sx={{ marginTop: 2 }}>
//           Already have an account?{" "}
//           <span
//             style={{ color: "#8B0000", cursor: "pointer" }}
//             onClick={() => router.push("/login")}
//           >
//             Login here
//           </span>
//         </Typography>
//       </Container>
//     </Box>
//   );
// }


// "use client";
// import { useState } from "react";
// import { Box, Container, TextField, Typography, Button, Alert, MenuItem } from "@mui/material";
// import { useRouter } from "next/navigation";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "", // Added role selection
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");

//     try {
//       const res = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || "Registration failed!");
//       } else {
//         setSuccess("✅ Registration successful! Redirecting...");
//         setTimeout(() => router.push("/login"), 2000);
//       }
//     } catch (err) {
//       console.error("❌ Request error:", err);
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
//           📚 Register
//         </Typography>

//         {error && <Alert severity="error">{error}</Alert>}
//         {success && <Alert severity="success">{success}</Alert>}

//         <form onSubmit={handleSubmit}>
//           <TextField
//             fullWidth
//             label="Full Name"
//             name="name"
//             margin="normal"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Email"
//             type="email"
//             name="email"
//             margin="normal"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             name="password"
//             margin="normal"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           {/* Role selection dropdown */}
//           <TextField
//             select
//             fullWidth
//             label="Role"
//             name="role"
//             margin="normal"
//             value={formData.role}
//             onChange={handleChange}
//             required
//           >
//             <MenuItem value="user">📖 User</MenuItem>
//             <MenuItem value="librarian">📚 Librarian</MenuItem>
//           </TextField>

//           <Button
//             type="submit"
//             variant="contained"
//             sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }}
//             fullWidth
//           >
//             Register
//           </Button>
//         </form>

//         <Typography variant="body2" sx={{ marginTop: 2 }}>
//           Already have an account?{" "}
//           <span
//             style={{ color: "#8B0000", cursor: "pointer" }}
//             onClick={() => router.push("/login")}
//           >
//             Login here
//           </span>
//         </Typography>
//       </Container>
//     </Box>
//   );
// }




"use client";
import { useState } from "react";
import { Box, Container, TextField, Typography, Button, Alert, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "user" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Registration failed!");
      } else {
        setSuccess("Registration successful! Redirecting...");
        setTimeout(() => router.push("/login"), 2000);
      }
    } catch (err) {
      console.error("❌ Request error:", err);
      setError("Something went wrong!");
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
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.85)",
          padding: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          📚 Register
        </Typography>

        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}

        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Full Name" name="name" margin="normal" value={formData.name} onChange={handleChange} />
          <TextField fullWidth label="Email" type="email" name="email" margin="normal" value={formData.email} onChange={handleChange} />
          <TextField fullWidth label="Password" type="password" name="password" margin="normal" value={formData.password} onChange={handleChange} />

          {/* Role Selection */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Role</InputLabel>
            <Select name="role" value={formData.role} onChange={handleChange}>
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="librarian">Librarian</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" sx={{ bgcolor: "#8B0000", color: "white", marginTop: 2 }} fullWidth>
            Register
          </Button>
        </form>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Already have an account?{" "}
          <span style={{ color: "#8B0000", cursor: "pointer" }} onClick={() => router.push("/login")}>
            Login here
          </span>
        </Typography>
      </Container>
    </Box>
  );
}
