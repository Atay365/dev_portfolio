import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Router } from "react-router-dom";
import Hero from "./components/sections/Hero";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  height: 90vh;
  overflow-x: hidden;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Hero />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
