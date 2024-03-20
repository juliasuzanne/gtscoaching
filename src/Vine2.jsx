import { useRive, EventType, RiveEventType } from "@rive-app/react-canvas";
import { useCallback, useEffect, useState, useRef } from "react";
import "./CSS/rive.css";

export function Vine2() {
  const { rive, RiveComponent } = useRive({
    src: "vine.riv",
    stateMachines: "ScrollingBehavior",
    autoPlay: "false",
  });

  const onRiveEventReceived = (riveEvent) => {
    const eventData = riveEvent.data;
    const eventProperties = eventData.properties;
  };
  // Wait until the rive object is instantiated before adding the Rive
  // event listener
  return (
    <div>
      <div className="rivecontainer">
        <RiveComponent className="riveBox" onMouseEnter={() => rive && rive.play()} />
      </div>
    </div>
  );
}
