import './App.scss';
import React, { useEffect } from 'react';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import PopUp from './components/popup/popup';
import WorkHistory from './components/workHistory/workHistory';
import Education from './components/education/education';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';

function App() {

  useEffect(() => {
    document.title = 'Apoorva Jakati Portfolio';
  }, []);

  return (
    <div className="App">
      <link rel="stylesheet" href="./css/icon-font.css" />
      <Navigation/>
      <Hero/>
      <About/>
      <Skills/>
      <WorkHistory/>
      <Projects/>
      <PopUp/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
