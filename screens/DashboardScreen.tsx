import React from "react";

import { StyleSheet } from "react-native";

import { Button, Layout, Text } from "@ui-kitten/components";

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

const DashboardScreen = ({ navigation }: Props): React.ReactNode => {
  const navigateToPodcasts = () => {
    navigation.jumpTo("Podcasts");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.layout}>
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
