import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import "../styles/app-bar.css";

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <nav className='app-bar-container'>
      <div className='app-bar-wrapper'>
        <Tooltip title='Previous'>
          <Button
            variant='contained'
            className='buttons'
            size='small'
            onClick={() => navigate(-1)}
            endIcon={<ArrowBackIosIcon />}
          ></Button>
        </Tooltip>
        <div style={{ alignContent: "center" }}>Check In</div>
        <Tooltip title='Next'>
          <Button
            variant='contained'
            className='buttons'
            size='small'
            style={{ rotate: "180deg" }}
            onClick={() => navigate(1)}
            endIcon={<ArrowBackIosIcon />}
          ></Button>
        </Tooltip>
      </div>
    </nav>
  );
};

export default AppBar;
