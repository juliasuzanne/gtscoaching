import { TypeAnimation } from "react-type-animation";

export function TypingDefinitions() {
  return (
    <div>
      <h2>GTS is a...</h2>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "recruitment service",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "consulting firm",
          3000,
          "holistic mindset",
          3000,
          "turnkey solution",
          5000,
        ]}
        wrapper="span"
        speed={10}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}
