import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import PersonalityForm from "./PersonalityForm";
import Books from "../components/Books";
import NavBar from "../components/NavBar";
import axios, { recommendBookRoute } from "../api/api";
import { useUserInfo } from "../context/userInfoContex";
import Welcome from "../components/Welcome";

function Home() {
  const [detectGenre, setDetectGenre] = useState(0);
  const [indexOfFollowUp, setIndexOfFollowUp] = useState(0);
  const [books, setBooks] = useState([]);
  const userInfo = useUserInfo();

  const detectGenreMapping = [0.2, 0.4, 0.6, 0.8, 1];
  const indexOfFollowUpMapping = [0.2, 0.4, 0.6, 0.8, 1];

  const handleChangeLikertScale = (event) => {
    setDetectGenre(event.target.value);
  };
  const handleChangeDropDown = (event) => {
    setIndexOfFollowUp(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (userInfo) {
        const payload = {
          userName: userInfo.userName,
          personalityVector: [
            detectGenreMapping[detectGenre],
            indexOfFollowUpMapping[indexOfFollowUp],
          ],
        };
        const res = await axios.post(recommendBookRoute, payload);
        const books = res.data;
        setBooks(books);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <NavBar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <PersonalityForm
          handleSubmit={handleSubmit}
          handleChangeLikertScale={handleChangeLikertScale}
          handleChangeDropDown={handleChangeDropDown}
          detectGenre={detectGenre}
          indexOfFollowUp={indexOfFollowUp}
        />
        <Divider orientation="vertical" flexItem />
        {books.length ? <Books books={books} /> : <Welcome />}
      </Box>
    </Box>
  );
}

export default Home;
