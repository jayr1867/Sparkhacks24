//import { useState } from "react";
import "./App.css";
// import Background from "./Background.jsx";
// import About from "./About.jsx";
// import Ribbon from "./Ribbon.jsx";

// import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home.jsx";
import DashboardDoner from "./DashboardDoner.jsx";
import DashboardNGO from "./DashboardNGO.jsx";
import User from "./user.jsx";


function App() {
  return (
    <>
      {/* <About />
      <Ribbon/> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DashboardDoner" element={<DashboardDoner />} />
          <Route path="/DashboardNGO" element={<DashboardNGO />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
