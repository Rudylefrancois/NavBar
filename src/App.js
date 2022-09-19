import './App.css';
import Nav from "./components/Nav/index";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
        < Nav />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
