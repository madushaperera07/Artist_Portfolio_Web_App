
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Events from './Components/Events';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Events" element={<Events/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
