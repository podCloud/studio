import React, { useState, useEffect } from "react";

import { StyleSheet, Animated, Easing } from "react-native";

const styles = StyleSheet.create({
  dot: {
    marginTop: 5,
    width: 3,
    height: 3,
    borderRadius: 8,
    backgroundColor: "#fff",
    opacity: 0,
  },
  selected: {
    opacity: 1,
  },
});

type TabDotProps = { selected: boolean };

const TabDot = ({ selected }: TabDotProps): React.ReactNode => {
  const [widthAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(widthAnim, {
      fromValue: selected ? 1 : 100,
      toValue: selected ? 100 : 1,
      duration: 200,
      easeIn: Easing.in(Easing.bounce),
    }).start();
  }, [selected, widthAnim]);

  // eslint-disable-next-line no-console
  console.log("rendering tab dot : ", { widthAnim, selected });

  return (
    <Animated.View
      style={[
        styles.dot,
        selected && styles.selected,
        {
          width: widthAnim.interpolate({
            inputRange: [1, 100],
            outputRange: ["1%", "100%"],
          }),
        },
      ]}
    />
  );
};

export default TabDot;
