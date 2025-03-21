"use client";
import { Button, Container, Typography, Box } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

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
        sx={{
          textAlign: "center",
          bgcolor: "rgba(255, 255, 255, 0.8)",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          📚 Welcome to the Library Management System
        </Typography>
        <Typography variant="h6" gutterBottom>
          Manage books, borrow requests, and users efficiently.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 1 }}
          onClick={() => router.push("/register")}
        >
          Register
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ margin: 1 }}
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </Container>
    </Box>
  );
}
