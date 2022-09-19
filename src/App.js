import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyles from "./globalStyles";
import { LightTheme } from "./components/Themes";
import { Routes, Route, Link, useLocation } from "react-router-dom";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import SkillsPage from "./components/SkillsPage";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={LightTheme}>
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/skills' element={<SkillsPage />} />
            <Route exact path='/work' element={<WorkPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
