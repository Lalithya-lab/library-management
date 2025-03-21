// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button } from "@mui/material";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   return (
//     isAuthenticated && (
//       <Box
//         sx={{
//           backgroundImage: "url('/images/library-bg.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "100vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Container
//           maxWidth="sm"
//           sx={{
//             bgcolor: "rgba(255, 255, 255, 0.85)",
//             padding: 4,
//             borderRadius: 2,
//             textAlign: "center",
//           }}
//         >
//           <Typography variant="h4">📚 Welcome to the Library Dashboard!</Typography>
//           <Typography variant="body1" sx={{ marginTop: 2 }}>
//             Here, you can manage books, view users, and more.
//           </Typography>

//           <Button
//             variant="contained"
//             sx={{ bgcolor: "#8B0000", color: "white", marginTop: 4 }}
//             onClick={handleLogout}
//           >
//             Logout
//           </Button>
//         </Container>
//       </Box>
//     )
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button, Grid, Card, CardContent } from "@mui/material";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [books, setBooks] = useState([]); // ✅ Ensure books is initialized as an empty array

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       fetchBooks();
//     }
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("/api/books");
//       const data = await res.json();
//       setBooks(data.books || []); // ✅ Ensure books is an array
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setBooks([]); // ✅ Prevent undefined errors
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-dashboard.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         padding: 4,
//       }}
//     >
//       <Container>
//         <Typography variant="h3" sx={{ color: "#fff", textAlign: "center", mb: 4 }}>
//           📚 Library Dashboard
//         </Typography>

//         <Button variant="contained" color="error" sx={{ mb: 2 }} onClick={handleLogout}>
//           Logout
//         </Button>

//         <Grid container spacing={3}>
//           {books.length > 0 ? ( // ✅ Check if books array is not empty
//             books.map((book) => (
//               <Grid item xs={12} sm={6} md={4} key={book._id}>
//                 <Card>
//                   <CardContent>
//                     <Typography variant="h6">{book.title}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Author: {book.author}
//                     </Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Status: {book.isAvailable ? "Available" : "Borrowed"}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", width: "100%" }}>
//               No books available
//             </Typography>
//           )}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }


// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar } from "@mui/material";

// export default function DashboardPage() {
//   const router = useRouter();
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       router.push("/login");
//     } else {
//       fetchBooks();
//     }
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("/api/books");
//       const data = await res.json();
//       setBooks(data.books || []);
//     } catch (error) {
//       console.error("Error fetching books:", error);
//       setBooks([]);
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     router.push("/login");
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-dashboard.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//       }}
//     >
//       {/* App Bar for Logout Button */}
//       <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             📖 "A Reader Lives a Thousand Lives Before He Dies" 
//           </Typography>
//           <Button variant="contained" color="error" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container sx={{ textAlign: "center", paddingTop: 4 }}>
//         <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 4 }}>
//           📚 Welcome to Your Personal Library
//         </Typography>

//         <Grid container spacing={3}>
//           {books.length > 0 ? (
//             books.map((book) => (
//               <Grid item xs={12} sm={6} md={4} key={book._id}>
//                 <Card sx={{ backgroundColor: "#fff9c4", borderRadius: 2 }}>
//                   <CardContent>
//                     <Typography variant="h6">{book.title}</Typography>
//                     <Typography variant="body2" color="textSecondary">
//                       Author: {book.author}
//                     </Typography>
//                     <Typography variant="body2" color={book.isAvailable ? "green" : "red"}>
//                       {book.isAvailable ? "Available" : "Borrowed"}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", width: "100%" }}>
//               📖 No books available. Add some books to your collection!
//             </Typography>
//           )}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography, Button, Grid, Card, CardContent, AppBar, Toolbar, TextField } from "@mui/material";

export default function DashboardPage() {
  const router = useRouter();
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      fetchBooks();
    }
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data.books || []);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    }
  };

  const addBook = async () => {
    if (!title || !author) return alert("Both fields are required!");

    try {
      const res = await fetch("/api/books", {
        method: "POST",
        body: JSON.stringify({ title, author }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setTitle("");
        setAuthor("");
        fetchBooks(); // Refresh book list
      } else {
        alert("Error adding book!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/library-dashboard.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            📖 "A Reader Lives a Thousand Lives Before He Dies"
          </Typography>
          <Button variant="contained" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ textAlign: "center", paddingTop: 4 }}>
        <Typography variant="h3" sx={{ color: "#fff", fontWeight: "bold", mb: 2 }}>
          📚 Manage Your Library
        </Typography>

        {/* Add Book Form */}
        <Box sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: 3, borderRadius: 2, mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>➕ Add a New Book</Typography>
          <TextField
            fullWidth label="Book Title" value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth label="Author" value={author}
            onChange={(e) => setAuthor(e.target.value)}
            margin="normal"
          />
          <Button
            variant="contained"
            sx={{ bgcolor: "#4CAF50", color: "white", mt: 2 }}
            onClick={addBook}
          >
            Add Book
          </Button>
        </Box>

        {/* Book List */}
        <Grid container spacing={3}>
          {books.length > 0 ? (
            books.map((book) => (
              <Grid item xs={12} sm={6} md={4} key={book._id}>
                <Card sx={{ backgroundColor: "#fff9c4", borderRadius: 2 }}>
                  <CardContent>
                    <Typography variant="h6">{book.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      Author: {book.author}
                    </Typography>
                    <Typography variant="body2" color={book.isAvailable ? "green" : "red"}>
                      {book.isAvailable ? "Available" : "Borrowed"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" sx={{ color: "#fff", textAlign: "center", width: "100%" }}>
              📖 No books available. Add some books to your collection!
            </Typography>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
