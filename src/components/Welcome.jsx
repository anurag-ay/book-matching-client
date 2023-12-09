import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import { useUserInfo } from "../context/userInfoContex";
function Welcome() {
  const userInfo = useUserInfo();
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        paddingLeft={"2rem"}
        paddingRight={"2rem"}
        sx={{
          backgroundColor: "#f2f2f2",
          height: "100vh",
          width: "50vw",
        }}
      >
        <Stack alignItems={"center"} direction={"column"} spacing={5}>
          <Typography variant="h2">
            Hello! {userInfo && userInfo.name}
          </Typography>
          <Typography variant="body2">
            Fill the form to get relevant books according to your personality
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default Welcome;
