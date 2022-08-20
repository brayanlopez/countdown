import React from "react";
import { Typography } from "@mui/material";

const TimeIsOver = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ fontFamily: "Silkscreen", fontSize: "13rem" }}
      >
        TIME IS OVER
      </Typography>
      <Typography variant="h2" sx={{ fontFamily: "Creepster", color: "red" }}>
        ¿Qué haran ahora?
      </Typography>
    </>
  );
};

export default TimeIsOver;
