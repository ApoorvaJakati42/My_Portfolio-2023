import './App.scss';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Skills from './components/skills/skills'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="./css/icon-font.css" />
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
