import React from 'react';
import './components/sass/App.scss';
import Navigation from "./components/js/Navigation";
import Name from "./components/js/Name";
import Contact from "./components/js/Contact";
import AboutMe from "./components/js/AboutMe";
import Technology from "./components/js/Technology";
import Projects from "./components/js/Projects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Name />
      <AboutMe />
      <Projects />
      <Technology />
      <Contact />
    </div>
  );
}

export default App;
