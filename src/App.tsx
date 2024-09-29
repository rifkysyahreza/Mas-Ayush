import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/index";
import Contact from "./Pages/Contact/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
