import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function Students({ data }) {
  const {
    name,
    email,
    personalityAnswers,
    recommendedGenres,
    personalityVector,
    readBooks,
  } = data;

  return (
    <Paper sx={{ padding: 16 }}>
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      <Typography variant="body1">{email}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Personality Answers
          </Typography>
          <List>
            {personalityAnswers.map((answer) => (
              <ListItem key={answer._id}>
                <ListItemText
                  primary={answer.questionId}
                  secondary={answer.answer}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Recommended Genres
          </Typography>
          <List>
            {recommendedGenres.map((genre) => (
              <ListItem key={genre}>
                <ListItemText primary={genre} />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        Personality Vector
      </Typography>
      <List>
        {personalityVector.map((value, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Value ${index + 1}`} secondary={value} />
          </ListItem>
        ))}
      </List>
      {readBooks && readBooks.length > 0 && (
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Read Books
          </Typography>
          <List>
            {readBooks.map((book) => (
              <ListItem key={book._id}>
                <ListItemText
                  primary={book.title}
                  secondary={`${book.author} - ${book.genre}`}
                />
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      )}
    </Paper>
  );
}
