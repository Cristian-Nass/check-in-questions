import { Button } from "@mui/material";
import "../styles/home-page.css";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import { Link } from "react-router-dom";
import Header from "../components/Header";
const HomePage = () => {
  return (
    <main className='home-text-wrapper'>
      <Header message='Check In' />
      <aside>
        <p>
          You will be given a question and then go around the room until
          everyone had a chance to answer it.
        </p>
        <p>
          We will show you a timer so you can make sure to keep the conversation
          moving.
        </p>
        <p>
          Once everyone (including yourself) has answered the question, just
          exit the exercise by pressing the back button in the top left.
        </p>
      </aside>
      <aside style={{ textAlign: "center" }}>
        <Link to='/questions'>
          <Button
            variant='contained'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
            }}
            endIcon={<PlayArrowOutlinedIcon />}
          >
            Start
          </Button>
        </Link>
      </aside>
    </main>
  );
};

export default HomePage;
