import useCountdown from "../hooks/useCountdown";
import { Button } from "@mui/material";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function CountdownTimer() {
  const { count, isActive, startCountdown, togglePause, resetCountdown } =
    useCountdown(60);
  return (
    <article>
      <section>
        <h1>Countdown: {count}</h1>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            style={{ height: "10px" }}
            variant='determinate'
            value={(count / 60) * 100}
          />
        </Box>
        {!isActive && count === 60 && (
          // <button onClick={startCountdown}>Start</button>
          <Button
            variant='contained'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
              marginTop: "20px",
            }}
            onClick={startCountdown}
            endIcon={<PlayArrowOutlinedIcon />}
          >
            Start
          </Button>
        )}
        {isActive && count > 0 && (
          //   <button onClick={togglePause}>Pause</button>
          <Button
            variant='contained'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
              marginTop: "20px",
            }}
            onClick={togglePause}
            endIcon={<PauseOutlinedIcon />}
          >
            Pause
          </Button>
        )}
        {!isActive && count < 60 && count > 0 && (
          // <button onClick={togglePause}>Resume</button>
          <Button
            variant='contained'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
              marginTop: "20px",
              marginRight: "6px",
            }}
            onClick={togglePause}
            endIcon={<PlayCircleOutlinedIcon />}
          >
            Resume
          </Button>
        )}
        {count !== 60 && (
          //   <button onClick={resetCountdown}>Reset</button>
          <Button
            variant='contained'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
              marginTop: "20px",
              marginLeft: "6px",
            }}
            onClick={resetCountdown}
            endIcon={<ReplayOutlinedIcon />}
          >
            Reset
          </Button>
        )}
      </section>
    </article>
  );
}

export default CountdownTimer;
