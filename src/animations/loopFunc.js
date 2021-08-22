import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

export const LoopFuncAnimation = () => {
  const boxAnimationValue = new Animated.Value(0);
  const animatedStyle = {
    transform: [{ translateY: boxAnimationValue }],
  };
  const startAnimation = () => {
    Animated.loop(
      Animated.timing(boxAnimationValue, {
        toValue: 100,
        duration: 2000,
        useNativeDriver: false,
      }),
      {
        iterations: 2, // how many times to repeat
      }
    ).start();
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => startAnimation()}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 6,
    backgroundColor: "red",
  },
});
