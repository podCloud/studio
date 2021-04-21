import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from "@react-navigation/drawer";
import { useWindowDimensions } from "react-native";
import { Text } from "@ui-kitten/components";

import TopBarNavigator from "../components/TopBarNavigator";
import DashboardScreen from "../screens/DashboardScreen";
import PodcastsScreen from "../screens/PodcastsScreen";

export type AppNavigatorParamList = {
  Dashboard: undefined;
  Podcasts: undefined;
};

const { Navigator, Screen } = createDrawerNavigator<AppNavigatorParamList>();

export type NavigationProps = {
  navigation: DrawerNavigationProp<AppNavigatorParamList>;
};

const linking = {
  prefixes: ["http://localhost:19006"],
  config: {
    screens: {
      Dashboard: "/",
      Podcasts: "/podcasts",
    },
  },
};

const AppNavigator = (): React.ReactNode => {
  const dimensions = useWindowDimensions();

  return (
    <>
      <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <TopBarNavigator />
        <Navigator
          initialRouteName="Dashboard"
          drawerType="front"
          drawerStyle={dimensions.width > 768 ? { width: 0 } : {}}
          backBehavior="history"
        >
          <Screen name="Dashboard" component={DashboardScreen} />
          <Screen name="Podcasts" component={PodcastsScreen} />
        </Navigator>
      </NavigationContainer>
    </>
  );
};
export default AppNavigator;
