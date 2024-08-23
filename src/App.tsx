import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AppBar from "./components/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import QuestionsPage from "./pages/QuestionsPage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff867c",
      main: "#000",
      dark: "#474747",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff5f52",
      main: "#c62828",
      dark: "#8e0000",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/questions' element={<QuestionsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
