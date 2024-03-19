import { useLottie, useLottieInteractivity } from "lottie-react";
import leaftest from "/src/assets/leaftest.json";

const style = {
  height: 400,
};

const options = {
  animationData: leaftest,
};

export const LeafAnimation = () => {
  const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    player: "#firstLottie",
    container: "#scrolling-this",
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.3],
        type: "seek",
        frames: [0, 49],
      },
      {
        visibility: [0.6, 0.9],
        type: "seek",
        frames: [50, 149],
      },
      {
        visibility: [0.9, 1],
        type: "seek",
        frames: [150, 162],
      },
    ],
  });

  return Animation;
};
