// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, TextField } from "@mui/material";

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   image: string;
// }

// export default function LibrarianDashboard() {
//   const router = useRouter();
  
//   // Dummy book data
//   const [books, setBooks] = useState<Book[]>([
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/images/gatsby.jpg" },
//     { id: 2, title: "1984", author: "George Orwell", image: "/images/1984.jpg" },
//   ]);

//   // Form state for adding new books
//   const [newBook, setNewBook] = useState({ title: "", author: "", image: "" });

//   // Handle adding a new book
//   const handleAddBook = () => {
//     if (!newBook.title || !newBook.author || !newBook.image) {
//       alert("Please fill all fields!");
//       return;
//     }

//     const newBookEntry = {
//       id: books.length + 1,
//       ...newBook,
//     };

//     setBooks([...books, newBookEntry]);
//     setNewBook({ title: "", author: "", image: "" });
//     alert(`Book "${newBook.title}" added successfully!`);
//   };

//   // Handle deleting a book
//   const handleDeleteBook = (id: number) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };

//   // Handle updating a book (for simplicity, just changing the title)
//   const handleUpdateBook = (id: number) => {
//     const updatedTitle = prompt("Enter new title:");
//     if (updatedTitle) {
//       setBooks(
//         books.map((book) => (book.id === id ? { ...book, title: updatedTitle } : book))
//       );
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 4,
//       }}
//     >
//       <Container sx={{ bgcolor: "rgba(255, 255, 255, 0.9)", padding: 4, borderRadius: 2 }}>
//         <Typography variant="h3" textAlign="center" gutterBottom>
//           📖 Librarian Dashboard
//         </Typography>

//         {/* Add Book Form */}
//         <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
//           <TextField
//             label="Title"
//             fullWidth
//             value={newBook.title}
//             onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//           />
//           <TextField
//             label="Author"
//             fullWidth
//             value={newBook.author}
//             onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//           />
//           <TextField
//             label="Image URL"
//             fullWidth
//             value={newBook.image}
//             onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
//           />
//           <Button
//             variant="contained"
//             sx={{ bgcolor: "green", color: "white", minWidth: 100 }}
//             onClick={handleAddBook}
//           >
//             Add
//           </Button>
//         </Box>

//         {/* Books List */}
//         <Grid container spacing={3}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} key={book.id}>
//               <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
//                 <CardMedia component="img" height="300" image={book.image} alt={book.title} />
//                 <CardContent>
//                   <Typography variant="h6">{book.title}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {book.author}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     sx={{ bgcolor: "orange", color: "white", marginTop: 1, width: "100%" }}
//                     onClick={() => handleUpdateBook(book.id)}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     variant="contained"
//                     sx={{ bgcolor: "red", color: "white", marginTop: 1, width: "100%" }}
//                     onClick={() => handleDeleteBook(book.id)}
//                   >
//                     Delete
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Button
//           variant="outlined"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: 4 }}
//           onClick={() => router.push("/")}
//         >
//           Back to Home
//         </Button>
//       </Container>
//     </Box>
//   );
// }



// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia, TextField } from "@mui/material";

// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   image: string; // Base64 or URL
// }

// export default function LibrarianDashboard() {
//   const router = useRouter();
  
//   // Dummy book data
//   const [books, setBooks] = useState<Book[]>([
//     { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", image: "/images/gatsby.jpg" },
//     { id: 2, title: "1984", author: "George Orwell", image: "/images/1984.jpg" },
//   ]);

//   // Form state for adding new books
//   const [newBook, setNewBook] = useState({ title: "", author: "", image: "" });

//   // Handle file upload
//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       // Ensure the file is an image
//       if (!file.type.startsWith("image/")) {
//         alert("Only image files are allowed!");
//         return;
//       }

//       // Convert image to Base64 (Temporary preview)
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewBook({ ...newBook, image: reader.result as string });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle adding a new book
//   const handleAddBook = () => {
//     if (!newBook.title || !newBook.author || !newBook.image) {
//       alert("Please fill all fields and select an image!");
//       return;
//     }

//     const newBookEntry = {
//       id: books.length + 1,
//       ...newBook,
//     };

//     setBooks([...books, newBookEntry]);
//     setNewBook({ title: "", author: "", image: "" });
//     alert(`Book "${newBook.title}" added successfully!`);
//   };

//   // Handle deleting a book
//   const handleDeleteBook = (id: number) => {
//     setBooks(books.filter((book) => book.id !== id));
//   };

//   // Handle updating a book
//   const handleUpdateBook = (id: number) => {
//     const updatedTitle = prompt("Enter new title:");
//     if (updatedTitle) {
//       setBooks(
//         books.map((book) => (book.id === id ? { ...book, title: updatedTitle } : book))
//       );
//     }
//   };

//   return (
//     <Box
//       sx={{
//         backgroundImage: "url('/images/library-bg.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: 4,
//       }}
//     >
//       <Container sx={{ bgcolor: "rgba(255, 255, 255, 0.9)", padding: 4, borderRadius: 2 }}>
//         <Typography variant="h3" textAlign="center" gutterBottom>
//           📖 Librarian Dashboard
//         </Typography>

//         {/* Add Book Form */}
//         <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 3 }}>
//           <TextField
//             label="Title"
//             fullWidth
//             value={newBook.title}
//             onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
//           />
//           <TextField
//             label="Author"
//             fullWidth
//             value={newBook.author}
//             onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
//           />

//           {/* File Upload for Image */}
//           <input type="file" accept="image/*" onChange={handleFileUpload} />

//           {/* Show Preview if Image is Selected */}
//           {newBook.image && (
//             <img
//               src={newBook.image}
//               alt="Book Preview"
//               style={{ width: "150px", height: "200px", objectFit: "cover", marginTop: "10px", borderRadius: "8px" }}
//             />
//           )}

//           <Button
//             variant="contained"
//             sx={{ bgcolor: "green", color: "white" }}
//             onClick={handleAddBook}
//           >
//             Add Book
//           </Button>
//         </Box>

//         {/* Books List */}
//         <Grid container spacing={3}>
//           {books.map((book) => (
//             <Grid item xs={12} sm={6} md={4} key={book.id}>
//               <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
//                 <CardMedia component="img" height="300" image={book.image} alt={book.title} />
//                 <CardContent>
//                   <Typography variant="h6">{book.title}</Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {book.author}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     sx={{ bgcolor: "orange", color: "white", marginTop: 1, width: "100%" }}
//                     onClick={() => handleUpdateBook(book.id)}
//                   >
//                     Update
//                   </Button>
//                   <Button
//                     variant="contained"
//                     sx={{ bgcolor: "red", color: "white", marginTop: 1, width: "100%" }}
//                     onClick={() => handleDeleteBook(book.id)}
//                   >
//                     Delete
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Button
//           variant="outlined"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: 4 }}
//           onClick={() => router.push("/")}
//         >
//           Back to Home
//         </Button>
//       </Container>
//     </Box>
//   );
// }



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Box, Container, Typography, Button, Grid, 
  Card, CardContent, CardMedia, TextField 
} from "@mui/material";

interface Book {
  id: number;
  title: string;
  author: string;
  image: string; // Base64 or URL
}

export default function LibrarianDashboard() {
  const router = useRouter();
  
  // Dummy book data
  const [books, setBooks] = useState<Book[]>([
    { id: 1, title: "The Pilgrim's Progess", author: "John Bunyan", image: "/images/pilgrims.jpg" },
    { id: 2, title: "Broken Still Chosen", author: "Rob Roozeboom", image: "/images/broken.jpg" },
    { id: 3, title: "Through Gates of Splendor", author: "Elisabeth Elliot", image: "/images/splendour.jpg" },
  ]);

  // Form state for adding new books
  const [newBook, setNewBook] = useState({ title: "", author: "", image: "" });

  // Handle file upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Only image files are allowed!");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewBook({ ...newBook, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle adding a new book
  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.image) {
      alert("Please fill all fields and select an image!");
      return;
    }
    const newBookEntry = { id: books.length + 1, ...newBook };
    setBooks([...books, newBookEntry]);
    setNewBook({ title: "", author: "", image: "" });
    alert(`Book "${newBook.title}" added successfully!`);
  };

  // Handle deleting a book
  const handleDeleteBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Handle updating a book
  const handleUpdateBook = (id: number) => {
    const updatedTitle = prompt("Enter new title:");
    if (updatedTitle) {
      setBooks(
        books.map((book) => (book.id === id ? { ...book, title: updatedTitle } : book))
      );
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    router.push("/login"); // Redirect to login
  };

  return (
    <Box
      sx={{
        backgroundImage: "url('/images/library-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
        position: "relative",
      }}
    >
      {/* Logout Button in Top Right Corner */}
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          backgroundColor: "#d32f2f",
          color: "white",
          "&:hover": { backgroundColor: "#b71c1c" },
        }}
        onClick={handleLogout}
      >
        Logout
      </Button>

      <Container sx={{ bgcolor: "rgba(255, 255, 255, 0.9)", padding: 4, borderRadius: 2 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          📖 Librarian Dashboard
        </Typography>

        {/* Add Book Form */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 3 }}>
          <TextField
            label="Title"
            fullWidth
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          />
          <TextField
            label="Author"
            fullWidth
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          />
          <input type="file" accept="image/*" onChange={handleFileUpload} />
          {newBook.image && (
            <img
              src={newBook.image}
              alt="Book Preview"
              style={{ width: "150px", height: "200px", objectFit: "cover", marginTop: "10px", borderRadius: "8px" }}
            />
          )}
          <Button
            variant="contained"
            sx={{ bgcolor: "green", color: "white" }}
            onClick={handleAddBook}
          >
            Add Book
          </Button>
        </Box>

        {/* Books List */}
        <Grid container spacing={3}>
          {books.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
                <CardMedia component="img" height="350" image={book.image} alt={book.title} />
                <CardContent>
                  <Typography variant="h6">{book.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.author}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "orange", color: "white", marginTop: 1, width: "100%" }}
                    onClick={() => handleUpdateBook(book.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "red", color: "white", marginTop: 1, width: "100%" }}
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ marginTop: 4 }}
          onClick={() => router.push("/")}
        >
          Back to Home
        </Button>
      </Container>
    </Box>
  );
}
