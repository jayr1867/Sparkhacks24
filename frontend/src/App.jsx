//import { useState } from "react";
import "./App.css";
// import Background from "./Background.jsx";
// import About from "./About.jsx";
// import Ribbon from "./Ribbon.jsx";

// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/" Component={<Home />} />
          <Route path="/DashboardDoner" Component={<DashboardDoner />} />
          <Route path="/DashboardNGO" Component={<DashboardNGO />} />
          <Route path="/User" Component={<User />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
