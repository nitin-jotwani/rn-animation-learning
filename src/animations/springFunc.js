import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

export const SpringFuncAnimation = () => {
  const boxAnimationValue = new Animated.Value(0);
  const animatedStyle = {
    transform: [{ translateY: boxAnimationValue }],
  };
  const startAnimation = () => {
    Animated.spring(boxAnimationValue, {
      toValue: 100,
      friction: 2,
      tension: 160,
      useNativeDriver: true,
    }).start(() => {
      // called once animation is finished.
    });
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
