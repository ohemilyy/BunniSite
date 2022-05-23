import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./componentry/router/Home.jsx";
import Projects from "./componentry/router/Projects.jsx";
import Experience from "./componentry/router/Experience.jsx";
import Contact from "./componentry/router/Contact.jsx";
import NotFound from "./componentry/router/404.jsx";
import Prices from "./componentry/router/Prices.jsx";
import FAQ from "./componentry/router/FAQ.jsx";
import "./css/Core.css";

function App() {
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="FAQ" element={<FAQ />} />
          <Route path="Prices" element={<Prices />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
