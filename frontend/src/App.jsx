//import { useState } from "react";
import "./App.css";
// import Background from "./Background.jsx";
// import About from "./About.jsx";
// import Ribbon from "./Ribbon.jsx";

// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardDoner from "./DashboardDoner.jsx";
import DashboardNGO from "./DashboardNGO.jsx";

function App() {
  return (
    <>
      {/* <About />
      <Ribbon/> */}

      <Router>
        <Routes>
          <Route path="/DashboardDoner" element={<DashboardDoner />} />
          <Route path="/DashboardNGO" element={<DashboardNGO />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
