import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Navi from './components/Navi';
import Works from './components/Works';

function App() {
  return (
    <div>
      <Navi />
      <br></br>
      <Main />
      <br></br>
      <About />
      <br></br>
      <Works />
      <br></br>
      <Contact />
      <br></br>
      <div>© 2021, Designed & Coded by Yang Jicheol</div>
    </div>
  );
}

export default App;
