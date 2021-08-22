import React from "react";
import { Text } from "react-native";
import { DelayAnimation } from "./animations/delayAnimation";
import { EventFuncAnimation } from "./animations/eventFunc";
import { InterpolationAnimation } from "./animations/interpolation";
import { LoopFuncAnimation } from "./animations/loopFunc";
import { OpacityAnimation } from "./animations/opacity";
import { ParallelAnimation } from "./animations/parallelAnimation";
import { ScaleAnimation } from "./animations/scale";
import { SpringFuncAnimation } from "./animations/springFunc";
import { TranslateAnimation } from "./animations/translate";
import { WidthHeightAnimation } from "./animations/widthHeight";
import { jsThreadBusy } from "./utils/JsThreadBusy";

const shouldMakeJSThreadBusy = false;

export const RNAnimationPOC = () => {
  jsThreadBusy(shouldMakeJSThreadBusy);
  return (
    <>
      <Text>
        JS Thread Busy (After 5Sec): {shouldMakeJSThreadBusy ? "Yes" : "No"}
      </Text>
      {/* <OpacityAnimation /> */}
      {/* <TranslateAnimation /> */}
      {/* <ScaleAnimation /> */}
      {/* <WidthHeightAnimation /> */}
      {/* <InterpolationAnimation /> */}
      {/* <SpringFuncAnimation /> */}
      {/* <LoopFuncAnimation /> */}
      {/* <EventFuncAnimation /> */}
      {/* <ParallelAnimation /> */}
      <DelayAnimation />
    </>
  );
};
