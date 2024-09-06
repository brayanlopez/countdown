import React, { useEffect, useState } from "react";

import { Grid, Button } from "@mui/material";
import { Container, createTheme, ThemeProvider } from "@mui/system";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Clock from "./components/Clock";
import TimeIsOver from "./components/TimeIsOver";

import SoundWatch from "./assets/sound/second-hand2.mp3";
import BellsMistery from "./assets/sound/bells-of-mystery.wav";
import TerrorRadioFrequency from "./assets/sound/terror-radio-frequency.wav";
import HauntedSlowOrchestra from "./assets/sound/haunted-slow-orchestra.wav";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A020F0",
    },
  },
  // status: {
  //   danger: orange[500],
  // },
});

function App() {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);

  const addMinutes = () => {
    if (minutes < 59) {
      setMinutes(minutes + 1);
    } else if (minutes === 59) {
      setHours(hours + 1);
      setMinutes(0);
    }
  };

  const subtractMinutes = () => {
    if (minutes > 0) {
      setMinutes(minutes - 1);
    } else if (hours > 0 && minutes === 0) {
      setHours(hours - 1);
      setMinutes(59);
    }
  };

  useEffect(() => {
    const soundWatch = new Audio(SoundWatch);
    const bellsMistery = new Audio(BellsMistery);
    const terrorRadioFrequency = new Audio(TerrorRadioFrequency);
    const hauntedSlowOrchestra = new Audio(HauntedSlowOrchestra);

    let sampleInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        soundWatch.play();
      } else if (seconds === 0 && minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
        bellsMistery.play();
      } else if (minutes === 0 && hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        terrorRadioFrequency.play();
      } else if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(sampleInterval);
        hauntedSlowOrchestra.play();
      }
    }, 1000);
    return () => clearInterval(sampleInterval);
  });

  const buttonStyles = {
    width: "40%",
    color: "#009a22",
    border: "1px solid #009a22",
    margin: "0 1rem",
  };

  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <div className="App">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#000",
            minHeight: "100vh",
            minWidth: "100vw",
            display: "flex",
            color: "#009a22",
            fontFamily: "Silkscreen",
          }}
        >
          {hours === 0 && minutes === 0 && seconds === 0 ? (
            <TimeIsOver />
          ) : (
            <>
              <Container sx={{ margin: "5rem 0", textAlign: "center" }}>
                <Clock hours={hours} minutes={minutes} seconds={seconds} />
              </Container>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="outlined"
                  onClick={addMinutes}
                  startIcon={<AddIcon />}
                  size="large"
                  sx={buttonStyles}
                >
                  minutes
                </Button>
                <Button
                  variant="outlined"
                  onClick={subtractMinutes}
                  startIcon={<RemoveIcon />}
                  size="large"
                  sx={buttonStyles}
                >
                  minutes
                </Button>
              </Grid>
            </>
          )}
        </Grid>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
