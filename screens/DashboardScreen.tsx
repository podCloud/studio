import React from "react";

import { StyleSheet, useWindowDimensions } from "react-native";

import {
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  Icon,
  IconProps,
  TopNavigationAction,
} from "@ui-kitten/components";

import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { AppNavigatorParamList } from "../navigators/AppNavigator";

type DashboardNavigationProps = DrawerNavigationProp<
  AppNavigatorParamList,
  "Dashboard"
>;

type Props = { navigation: DashboardNavigationProps };

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    marginVertical: 10,
  },
  goToPodcasts: {
    marginVertical: 5,
  },
});

const DashboardScreen = ({ navigation }: Props): JSX.Element => {
  const navigateToPodcasts = () => {
    navigation.jumpTo("Podcasts");
  };

  const dimensions = useWindowDimensions();

  // eslint-disable-next-line react/jsx-props-no-spreading
  const MenuIcon = (props: IconProps) => <Icon {...props} name="menu" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.layout}>
        <TopNavigation
          title="podCloud Studio"
          alignment="center"
          accessoryLeft={
            dimensions.width >= 1200
              ? null
              : () => (
                  <TopNavigationAction
                    icon={MenuIcon}
                    onPress={() => navigation.openDrawer()}
                  />
                )
          }
        />
        <Divider />
        <Layout level="1" style={styles.container}>
          <Text category="h1" style={styles.welcomeText}>
            Welcome to podCloud Studio !
          </Text>
          <Button onPress={navigateToPodcasts} style={styles.goToPodcasts}>
            Go to my podcasts
          </Button>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default DashboardScreen;
