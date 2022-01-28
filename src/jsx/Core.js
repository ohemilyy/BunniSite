import { Outlet, Routes, Route } from "react-router-dom";
import Home from "./componentry/router/Home.jsx";
import Projects from "./componentry/router/Projects.jsx";
import NotFound from "./componentry/router/404.jsx";
import "./css/Core.css";

function App() {
  return (
    <div>
      <div className="Body">
        <Routes>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
