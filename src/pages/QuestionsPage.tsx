import { getQuestion, questionsLength } from "../utils/questionsData";
import Header from "../components/Header";
import CountdownTimer from "../components/CountdownTimer";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const QuestionsPage = () => {
  const questionText = getQuestion(1);

  return (
    <aside className='home-text-wrapper'>
      <Header message="Today's Question" />
      <div style={{ fontSize: "14px", opacity: "0.6" }}>
        Question 1 / {questionsLength()}
      </div>
      <section>
        <p>{questionText}</p>
      </section>

      <section style={{ textAlign: "center" }}></section>
      <Divider />
      <div style={{ textAlign: "center", paddingTop: "10px" }}>
        <CountdownTimer />
      </div>
      <section style={{ textAlign: "center", paddingTop: "10px" }}>
        <Link to='/'>
          <Button
            variant='contained'
            color='error'
            style={{
              textTransform: "none",
              letterSpacing: "2px",
              fontSize: "14px",
              marginTop: "20px",
              marginLeft: "6px",
            }}
          >
            Exit
          </Button>
        </Link>
      </section>
    </aside>
  );
};

export default QuestionsPage;
