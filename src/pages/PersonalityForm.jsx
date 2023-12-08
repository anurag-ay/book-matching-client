import React, { useState } from "react";
import LikertScale from "../components/LikertScale";
import DropdownMenu from "../components/DropdownMenu";
import { Box, Button } from "@mui/material";
import NavBar from "../components/NavBar";

// The main component that renders the form
function PersonalityForm(props) {
  // The state that stores the user's answers

  const [openness, setOpenness] = useState(0);
  const [genre, setGenre] = useState(0);

  // The handler that updates the state when the user changes an answer
  const handleChangeLikertScale = (event) => {
    setOpenness(event.target.value);
  };
  const handleChangeDropDown = (event) => {
    setGenre(event.target.value);
  };

  // The handler that submits the form and displays the result
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to match the user's personality with a genre and a book
    console.log({ openness, genre });
  };

  // The data for the Likert scale question
  const likertQuestion = "By which era do you most facinated about?";
  const likertOptions = [
    "The Classical Era ",
    "The Medieval Era",
    "The Enlightenment Era ",
    "The Modern Era",
  ];

  // The data for the dropdown menu question
  const dropdownQuestion = "What is your favorite genre of literature?";
  const dropdownOptions = [
    "Fantasy",
    "Science fiction",
    "Mystery",
    "Romance",
    "Horror",
  ];

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
          width: "100vw",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "0.5em",
            gap: "1em",
          }}
          component="form"
          onSubmit={handleSubmit}
        >
          <LikertScale
            question={likertQuestion}
            options={likertOptions}
            onChange={handleChangeLikertScale}
          />
          <DropdownMenu
            question={dropdownQuestion}
            options={dropdownOptions}
            value={genre}
            onChange={handleChangeDropDown}
          />
          <Button type="submit">Submit</Button>
        </Box>
      </Box>
    </>
  );
}

export default PersonalityForm;
