import { useLottie, useLottieInteractivity } from "lottie-react";
import likeButton from "/src/assets/leaftest.json";

const style = {
  height: "50vh",
  width: "50vw",
  position: "absolute",
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
    actions: [
      {
        visibility: [0.4, 0.9],
        type: "seek",
        frames: [0, 160],
      },
    ],
  });
  return Animation;
}
