import { Grid, Stack } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Books({ books }) {
  return (
    <Stack
      sx={{ mt: "4.5em", overflowY: "scroll", height: "88vh", width: "50vw" }}
    >
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid key={index} item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250em"
                  image={book.imageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    overflow="clip"
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {book.title} <strong>By</strong> {book.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default Books;
