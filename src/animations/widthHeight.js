import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export const WidthHeightAnimation = () => {
  const boxAnimationValue = new Animated.Value(140);
  const [isAnimationDone, updateAnimationDone] = useState(false);
  const animatedStyle = {
    width: boxAnimationValue,
  };
  const startAnimation = () => {
    Animated.timing(boxAnimationValue, {
      toValue: 40,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // called once animation is finished.
      updateAnimationDone(true);
    });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => startAnimation()}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text>ST</Text>
          {isAnimationDone ? null : <Text>Key Moments</Text>}
        </Animated.View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 40,
    borderRadius: 32,
    borderColor: "#00000060",
    borderWidth: 1,
    backgroundColor: "#fff",
    shadowColor: "#00000060",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});
