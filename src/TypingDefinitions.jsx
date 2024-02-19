import { TypeAnimation } from "react-type-animation";

export function TypingDefinitions() {
  return (
    <div>
      <h1 className="largetype">GTS is</h1>

      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "a recruitment service",
          3000, // wait 1s before replacing "Mice" with "Hamsters"
          "a consulting firm",
          3000,
          "a holistic mindset",
          3000,
          "a turnkey solution",
          5000,
        ]}
        wrapper="span"
        speed={70}
        style={{ fontSize: "3em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
}
