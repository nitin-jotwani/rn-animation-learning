import React, { useState } from "react";
import { Animated, StyleSheet, ScrollView } from "react-native";

export const EventFuncAnimation = () => {
  const boxAnimationValue = new Animated.Value(0);
  const boxInterpolation = boxAnimationValue.interpolate({
    inputRange: [0, 3000],
    outputRange: ["#ff5000", "#000000"],
  });
  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };
  return (
    <>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: boxAnimationValue,
              },
            },
          },
        ])}
      >
        <Animated.View style={[styles.box, animatedStyle]} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 3000,
    backgroundColor: "yellow",
  },
});
