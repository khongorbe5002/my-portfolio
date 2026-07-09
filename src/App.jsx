import { HashRouter, Routes, Route } from 'react-router-dom' 
import Home from './Home';
import Projects from './Projects';
import './App.css';
import Resume from './Resume';
import Experiences from './Experiences';
import About from './About';
import Everything from './Everything';  



function App() {
  return (
    <HashRouter>
      {/* Notice how the layout wrapper and HomeNav are gone from here! */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/about" element={<About />} />
        <Route path="/everything-else" element={<Everything />} />

        <Route path="*" element={<Home />} />

      </Routes>
    </HashRouter>
  );
}

export default App;