import './App.css';
import './Components/Navbar';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
