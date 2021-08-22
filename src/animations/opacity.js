import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

export const OpacityAnimation = () => {
  const boxAnimationValue = new Animated.Value(0.5);
  const box2AnimationValue = new Animated.Value(1);
  const animatedStyle = {
    opacity: boxAnimationValue,
  };
  const animatedStyleBox2 = {
    opacity: box2AnimationValue,
  };
  const startAnimation = () => {
    Animated.timing(boxAnimationValue, {
      toValue: 1,
      delay: 5000,
      duration: 350,
      useNativeDriver: false,
    }).start(() => {
      // called once animation is finished.
      Animated.timing(box2AnimationValue, {
        toValue: 0.5,
        useNativeDriver: false,
      }).start();
    });
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => startAnimation()}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </TouchableWithoutFeedback>
      <Animated.View style={[styles.box, animatedStyleBox2]} />
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
