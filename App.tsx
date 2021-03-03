/* eslint-disable react/style-prop-object */
import React from "react";
import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import { StyleSheet, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as eva from "@eva-design/eva";

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const HomeScreen = (): JSX.Element => {
  return (
    <Layout style={styles.layout}>
      <TopNavigation title="podCloud Studio" />
      <Divider />
      <Layout level="1" style={styles.container}>
        <Button>Test</Button>
        <Text>I&apos;m starting to build my project !</Text>
        <StatusBar style="auto" />
      </Layout>
    </Layout>
  );
};

const App = (): JSX.Element => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ApplicationProvider {...eva} theme={eva.light}>
      <HomeScreen />
    </ApplicationProvider>
  );
};

export default App;
