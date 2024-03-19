import { LeafAnimation } from "./LeafAnimation";

export function LeafTest() {
  return (
    <>
      <div className="before-scroll"></div>

      <div className="lottie">
        <LeafAnimation />
      </div>
      <div className="scrolling-this" id="scrolling-this"></div>
    </>
  );
}
