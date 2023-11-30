import './App.scss';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import PopUp from './components/popup/popup';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="./css/icon-font.css" />
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <PopUp/>
    </div>
  );
}

export default App;
