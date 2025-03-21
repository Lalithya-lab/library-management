// "use client";
// import { useRouter } from "next/navigation";
// import { Box, Container, Typography, Button } from "@mui/material";

// export default function BorrowBooks() {
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
//           📖 Borrow Books
//         </Typography>
//         <Typography variant="h6" gutterBottom>
//           Select a book to borrow from the library.
//         </Typography>

//         <Button
//           variant="contained"
//           color="primary"
//           sx={{ margin: 2 }}
//           onClick={() => alert("Borrowing books feature coming soon!")}
//         >
//           Browse Books
//         </Button>

//         <Button
//           variant="outlined"
//           color="secondary"
//           sx={{ margin: 2 }}
//           onClick={() => router.push("/user-dashboard")}
//         >
//           Back to Dashboard
//         </Button>
//       </Container>
//     </Box>
//   );
// }



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Typography, Button, Grid, Card, CardContent, CardMedia } from "@mui/material";

const books = [
  { id: 1, title: "The Pilgrim's Progess", author: "John Bunyan", image: "/images/pilgrims.jpg" },
  { id: 2, title: "Broken Still Chosen", author: "Rob Roozeboom", image: "/images/broken.jpg" },
  { id: 3, title: "Through Gates of Splendor", author: "Elisabeth Elliot", image: "/images/splendour.jpg" },
];

export default function BorrowBooks() {
  const router = useRouter();
  const [borrowed, setBorrowed] = useState<string[]>([]);

  const handleBorrow = (title: string) => {
    setBorrowed([...borrowed, title]);
    alert(`You have borrowed "${title}".`);
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
      }}
    >
      <Container sx={{ bgcolor: "rgba(255, 255, 255, 0.9)", padding: 4, borderRadius: 2 }}>
        <Typography variant="h3" textAlign="center" gutterBottom>
          📖 Borrow Books
        </Typography>

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
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    disabled={borrowed.includes(book.title)}
                    onClick={() => handleBorrow(book.title)}
                  >
                    {borrowed.includes(book.title) ? "Borrowed" : "Borrow"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ marginTop: 4 }}
          onClick={() => router.push("/user-dashboard")}
        >
          Back to Dashboard
        </Button>
      </Container>
    </Box>
  );
}
