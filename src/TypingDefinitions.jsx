import { TypeAnimation } from "react-type-animation";

export function TypingDefinitions() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "GTS is a recruitment service",
        3000, // wait 1s before replacing "Mice" with "Hamsters"
        "GTS is a consulting firm",
        3000,
        "GTS is a holistic growth strategy",
        3000,
        "GTS is a turnkey solution",
        5000,
      ]}
      wrapper="span"
      speed={10}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
