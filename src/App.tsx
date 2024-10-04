import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/index";
import Contact from "./Pages/Contact/index";
import About from "./Pages/About/index";
import ShowContactFormData from "./Pages/ShowContactFormData/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/show" element={<ShowContactFormData />}></Route>
    </Routes>
  );
}

export default App;
