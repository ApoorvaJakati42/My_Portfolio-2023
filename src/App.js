import './App.scss';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import PopUp from './components/popup/popup';
import WorkHistory from './components/workHistory/workHistory';
import Education from './components/education/education';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="./css/icon-font.css" />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <PopUp/>
      <WorkHistory/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
