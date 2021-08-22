import React, { useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export const InterpolationAnimation = () => {
  const boxAnimationValue = new Animated.Value(0);
  const boxInterpolation = boxAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ff5000", "#000000"],
  });
  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };
  const startAnimation = () => {
    Animated.timing(boxAnimationValue, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
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
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
  },
});
