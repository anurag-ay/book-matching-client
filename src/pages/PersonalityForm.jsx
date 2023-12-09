import React from "react";
import LikertScale from "../components/LikertScale";
import DropdownMenu from "../components/DropdownMenu";
import { Box, Button, Typography } from "@mui/material";

function PersonalityForm(props) {
  const {
    handleSubmit,
    handleChangeLikertScale,
    handleChangeDropDown,
    detectGenre,
    indexOfFollowUp,
  } = props;

  return (
    <Box sx={{ width: "40vw", ml: "3em" }}>
      <Box
        sx={{
          marginTop: "7em",
          p: "1.2em",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h1" sx={{ fontSize: "2em", mb: "0.5em" }}>
            Personality Form
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}
          component="form"
          onSubmit={handleSubmit}
        >
          <LikertScale
            question={likertQuestion}
            options={likertOptions}
            onChange={handleChangeLikertScale}
          />
          <DropdownMenu
            question={followUp[detectGenre].question}
            options={followUp[detectGenre].options}
            value={indexOfFollowUp}
            onChange={handleChangeDropDown}
          />
          <Button
            sx={{
              backgroundColor: "#5ceccc",
              color: "white",
              "&:hover": { backgroundColor: "#d3e6e5", color: "black" },
            }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

// The data for the Likert scale question
const likertQuestion = "What excites you more when reading a book??";
const likertOptions = [
  "Unraveling the mysteries of the universe and exploring new worlds",
  "Delving into the depths of human emotions and relationships",
  "Solving intricate puzzles and confronting cunning adversaries",
  "Learning about real-world events and gaining new perspectives",
];

// data for fllow up question
const followUp = [
  {
    question: "What kind of world do you dream of exploring?",
    options: [
      "High fantasy with magic and mythical creatures.",
      "Futuristic space operas with advanced technology and alien encounters.",
      "Uncharted territories on Earth with hidden dangers and undiscovered species.",
      "Alternate realities with different rules and consequences.",
      "Delving into the depths of human emotions and relationships",
    ],
  },
  {
    question: "What kind of emotional journey do you find most compelling?",
    options: [
      "Sweeping love stories with passionate characters and grand gestures.",
      " Coming-of-age tales with self-discovery and overcoming challenges.",
      " Family dramas exploring complex dynamics and hidden secrets.",
      "Historical fiction with captivating characters facing social and political issues.",
      "Solving intricate puzzles and confronting cunning adversaries:",
    ],
  },
  {
    question: "What kind of mystery keeps you guessing until the very end?",
    options: [
      "Psychological thrillers with mind games and twists that challenge your perception.",
      "Classic whodunits with intricate clues and clever detectives.",
      "Crime stories with suspenseful chases and high-stakes confrontations.",
      "Political conspiracies with hidden agendas and unexpected betrayals.",
      "Learning about real-world events and gaining new perspectives:",
    ],
  },
  {
    question: "What historical period or event fascinates you the most?",
    options: [
      "Ancient civilizations with their myths, legends, and achievements.",
      "Major historical events that shaped the world we live in today.",
      "The lives of influential figures who changed the course of history.",
      "Social and cultural movements that challenged societal norms.",
      "Escaping reality and experiencing the joy of pure imagination:",
    ],
  },
];

export default PersonalityForm;
