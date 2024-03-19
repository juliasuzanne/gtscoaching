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
import { Navbar } from "./Navbar";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <br></br>

        <br></br>

        <p>Introducing an alternative to traditional recruiting:</p>
        <h1> GROWTH TALENT SOLUTIONS </h1>
        <a href="google.com">test</a>
      </div>

      <Fade>
        <EmailForm></EmailForm>
      </Fade>
    </>
  );
}
