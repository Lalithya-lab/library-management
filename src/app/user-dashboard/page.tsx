// "use client";
// import { Typography, Box } from "@mui/material";

// export default function UserDashboard() {
//   return (
//     <Box sx={{ padding: 4, textAlign: "center" }}>
//       <Typography variant="h3">👤 User Dashboard</Typography>
//       <Typography>Welcome! You can browse and borrow books here.</Typography>
//     </Box>
//   );
// }


// "use client";
// import { useRouter } from "next/navigation";
// import { Box, Button, Typography, Container } from "@mui/material";

// export default function UserDashboard() {
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
//         sx={{
//           textAlign: "center",
//           bgcolor: "rgba(255, 255, 255, 0.85)",
//           padding: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <Typography variant="h3" gutterBottom>
//           📚 User Dashboard
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Welcome! Choose an action below.
//         </Typography>

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ margin: 2 }}
//           onClick={() => router.push("/borrow")}
//         >
//           Borrow Books
//         </Button>

//         <Button
//           variant="outlined"
//           color="secondary"
//           sx={{ margin: 2 }}
//           onClick={() => router.push("/return")}
//         >
//           Return Books
//         </Button>
//       </Container>
//     </Box>
//   );
// }



"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Typography, Container } from "@mui/material";

export default function UserDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication (example: remove token from localStorage)
    localStorage.removeItem("token");
    
    // Redirect to login page
    router.push("/login");
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
        position: "relative", // Required for positioning logout button
      }}
    >
      {/* Logout Button in Top Right Corner */}
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "#d32f2f", // Red color
          color: "white",
          "&:hover": {
            backgroundColor: "#b71c1c", // Darker red on hover
          },
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>

      <Container
        sx={{
          textAlign: "center",
          bgcolor: "rgba(255, 255, 255, 0.85)",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h3" gutterBottom>
          📚 User Dashboard
        </Typography>
        <Typography variant="h6" gutterBottom>
          Welcome! Choose an action below.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ margin: 2 }}
          onClick={() => router.push("/borrow")}
        >
          Borrow Books
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{ margin: 2 }}
          onClick={() => router.push("/return")}
        >
          Return Books
        </Button>
      </Container>
    </Box>
  );
}
