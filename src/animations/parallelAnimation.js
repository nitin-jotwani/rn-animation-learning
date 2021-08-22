import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

export const ParallelAnimation = () => {
  const boxColorAnimationValue = new Animated.Value(0);
  const boxScaleAnimationValue = new Animated.Value(1);
  const boxColorInterpolation = boxColorAnimationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ff5000", "#000000"],
  });
  const animatedStyle = {
    transform: [{ scale: boxScaleAnimationValue }],
    backgroundColor: boxColorInterpolation,
  };
  const startAnimation = () => {
    Animated.parallel([
      // Animated.sequence([
      // Animated.stagger([2000,
      Animated.timing(boxColorAnimationValue, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(boxScaleAnimationValue, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
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
