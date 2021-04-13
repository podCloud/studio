import * as React from "react";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar, StatusBarProps } from "expo-status-bar";

const FocusAwareStatusBar = (props: StatusBarProps): JSX.Element => {
  const isFocused = useIsFocused();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return isFocused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
