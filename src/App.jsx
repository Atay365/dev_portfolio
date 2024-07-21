import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
