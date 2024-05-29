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
import { About } from "./About";
import { Approach } from "./Approach";
import { VineTop } from "./VineTop";
import { VineSmall } from "./VineSmall";
import { Logo } from "./Logo";
export function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main" id="main">
        {/* <div className="buttons"> */}
        {/* <Button url="/leaf" label="about"></Button>
        <Button url="/leaf" label="approach"></Button>
        <Button url="/leaf" label="contact"></Button> */}
        <br></br>
        <Logo />
        {/* <div className="leafwatermark"></div> */}
        <div className="linel"></div>
        <br></br>
        <br></br>

        <h1> GROWTH TALENT PATHWAYS </h1>
        <br></br>
        <p>Workforce entrance coaching</p>
      </div>

      <div className="break"></div>
      <About></About>
      <div className="break"></div>

      <Approach></Approach>
      {/* <Vine></Vine> */}
      <Vine></Vine>
      <VineTop></VineTop>
      {/* <VineSmall></VineSmall> */}
      <div className="break"></div>

      <EmailForm></EmailForm>
    </>
  );
}
