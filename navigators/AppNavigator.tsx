import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { Text } from "@ui-kitten/components";

import DashboardScreen from "../screens/DashboardScreen";
import PodcastsScreen from "../screens/PodcastsScreen";

const linking = {
  prefixes: ["http://localhost:19006"],
  config: {
    screens: {
      Dashboard: "/",
      Podcasts: "/podcasts",
    },
  },
};

export type AppNavigatorParamList = {
  Dashboard: undefined;
  Podcasts: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<AppNavigatorParamList>();

const AppNavigator = (): JSX.Element => {
  const dimensions = useWindowDimensions();

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Navigator
        initialRouteName="Dashboard"
        drawerType={dimensions.width >= 1200 ? "permanent" : "back"}
      >
        <Screen name="Dashboard" component={DashboardScreen} />
        <Screen name="Podcasts" component={PodcastsScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
