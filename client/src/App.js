import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Events from "./Components/Events";
import Admin from "./Components/Admin";
import SeeContact from "./Components/SeeContact";
import ControlEvent from "./Components/ControlEvent";
import "react-datetime/css/react-datetime.css";
import ListEvents from "./Components/ListEvents";
import CurdEvents from "./Components/CurdEvents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Control/Admin/Page" element={<Admin />} />
          <Route
            path="/Control/Admin/Page/SeeContact"
            element={<SeeContact />}
          />
          <Route
            path="/Control/Admin/Page/ControlEvant"
            element={<ControlEvent />}
          />
          <Route
            path="/Control/Admin/Page/ControlEvant/List"
            element={<ListEvents/>}
          />
          <Route
            path="/Control/Admin/Page/ControlEvant/ChangeEvents/:id"
            element={<CurdEvents />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
