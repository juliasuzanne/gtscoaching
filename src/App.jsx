import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import AnimatedCursor from "react-animated-cursor";
import { TypingDefinitions } from "./TypingDefinitions";
import { motion, useScroll } from "framer-motion";
import viteLogo from "/vite.svg";
import "./App.css";
import { EmailForm } from "./EmailForm";
import { Descriptions } from "./Descriptions";
import { Fade, Reveal } from "react-awesome-reveal";
import { Rhizome } from "./Rhizome";
import { Home } from "./Home";
import { LeafAnimation2 } from "./LeafAnimation2";
import { LeafTest } from "./LeafTest";
import { Vine2 } from "./Vine2";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./Navbar";
import { LeafAnimation } from "./LeafAnimation";
import { RiveEvents } from "./RiveEvents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LeafAnimation2></LeafAnimation2> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaf" element={<LeafAnimation />} />
        </Routes>
      </BrowserRouter>

      <div className="leafbottomright"></div>

      {/* <img
        className="leafbottomright"
        src="https://res.cloudinary.com/dytb4ayqj/image/upload/v1710819299/leafgrowth_ewobxf.png"
      ></img> */}
    </>
  );
}

export default App;
