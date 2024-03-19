import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import AnimatedCursor from "react-animated-cursor";
import { TypingDefinitions } from "./TypingDefinitions";
import { motion, useScroll } from "framer-motion";
import { LeafAnimation2 } from "./LeafAnimation2";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./Button";
import { EmailForm } from "./EmailForm";
import { Descriptions } from "./Descriptions";
import { Fade, Reveal } from "react-awesome-reveal";
import { Rhizome } from "./Rhizome";
import { Navbar } from "./Navbar";
import { Vine } from "./Vine";
import { Vine2 } from "./Vine2";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <br></br>
        <br></br>
        {/* <div className="leafwatermark"></div> */}
        <p>Introducing an alternative to traditional recruiting:</p>
        <h1> GROWTH TALENT SOLUTIONS </h1>
        <div className="buttons">
          <Button url="/leaf" label="about"></Button>
          <Button url="/leaf" label="approach"></Button>

          <Button url="/leaf" label="contact"></Button>
        </div>
      </div>
      {/* <Vine></Vine> */}
      <Vine></Vine>

      <Fade>
        <EmailForm></EmailForm>
      </Fade>
    </>
  );
}
