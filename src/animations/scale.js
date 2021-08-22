import React from "react";
import { Animated, StyleSheet, TouchableWithoutFeedback } from "react-native";

export const ScaleAnimation = () => {
  const boxAnimationValue = new Animated.Value(1);
  const animatedStyle = {
    transform: [{ scale: boxAnimationValue }],
  };
  const startAnimation = () => {
    Animated.timing(boxAnimationValue, {
      toValue: 2,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // called once animation is finished.
      Animated.timing(boxAnimationValue, {
        toValue: 0.5,
        duration: 2000,
        useNativeDriver: false,
      }).start();
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
