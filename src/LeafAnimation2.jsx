import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "/src/assets/leaftest.json";

const style = {
  height: "50vh",
  width: "50vw",
  position: "absolute",
  // border: 3,
  // borderStyle: "solid",
  // borderRadius: 7,
  bottom: 0,
  zIndex: "2",
};

const options = {
  animationData: likeButton,
};

export function LeafAnimation2() {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    container: "#main",
    actions: [
      {
        visibility: [0.3, 0.7],
        type: "seek",
        frames: [0, 160],
      },
    ],
  });
  return Animation;
}
