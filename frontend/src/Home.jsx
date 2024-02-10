//import { useState } from "react";
import "./App.css";
import Background from "./Background.jsx";
import About from "./About.jsx";
import Ribbon from "./Ribbon.jsx";
function Home() {
  return (
    <>
      <Ribbon />
      <Background />
      <About />
    </>
  );
}

export default Home;