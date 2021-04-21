import React from "react";

import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

type TabBarProps = {
  children: React.ReactNode;
};

const TabBar = ({ children }: TabBarProps): React.ReactNode => (
  <View style={styles.tabbar}>{children}</View>
);

export default TabBar;
