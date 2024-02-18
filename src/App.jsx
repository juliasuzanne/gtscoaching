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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatedCursor innerSize={8} outerSize={8} color="61,51,57" outerAlpha={0} innerScale={0.7} outerScale={0.6} />
      <Fade>
        <div className="headercontainer container-fluid m-0 p-0 ">
          <div className="row">
            <div className="header d-sm-block col-sm-12  col-lg-6 col-xl-6 col-xxl-6">
              <h2 className="typewriter">
                <TypingDefinitions />{" "}
              </h2>

              <Rhizome></Rhizome>
              <br></br>
              <br></br>
              <br></br>
              <p id="scroll">scroll</p>
              <p id="scroll">&#8595;</p>
            </div>
            <div className="monstera col-sm-12 col-lg-6 col-xxl-6 col-xl-6"></div>
          </div>
        </div>
      </Fade>

      <Fade>
        <Descriptions></Descriptions>
      </Fade>
      <Fade>
        <EmailForm></EmailForm>
      </Fade>
    </>
  );
}

export default App;
