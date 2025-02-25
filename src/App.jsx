import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nabout from "./Components/Nabout";
import Ncontact from "./Components/Ncontact";
import Nprojects from "./Components/Nprojects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Nabout/>} />
        <Route path="/projects" element={<Nprojects/>} />
        <Route path="/contact" element={<Ncontact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
