import React, { useState } from "react";

import { View, Image, StyleSheet } from "react-native";

import TabBar from "./TabBar";
import Tab from "./Tab";
import PodcastTab from "./PodcastTab";

import podCloudIcon from "../../assets/icon.svg";

const styles = StyleSheet.create({
  tabs: {
    width: "100%",
    flexDirection: "row",
  },
  logo: {
    resizeMode: "contain",
    height: 50,
    width: 50,
    marginHorizontal: 20,
  },
});

const DesktopNavigationBar = (): React.ReactNode => {
  const [selectedTab, setSelectedTab] = useState(0);

  // eslint-disable-next-line no-console
  console.log("Rendering all tabs");

  return (
    <View style={styles.tabs}>
      <Image source={podCloudIcon} style={styles.logo} />
      <TabBar>
        <Tab selected={selectedTab === 0} onPress={() => setSelectedTab(0)}>
          Tableau de bord
        </Tab>
        <Tab selected={selectedTab === 1} onPress={() => setSelectedTab(1)}>
          Mes podcasts
        </Tab>
        <PodcastTab
          selected={selectedTab === 2}
          onPress={() => setSelectedTab(2)}
        >
          P2P
        </PodcastTab>
        <PodcastTab
          selected={selectedTab === 3}
          onPress={() => setSelectedTab(3)}
        >
          Blog
        </PodcastTab>
      </TabBar>
    </View>
  );
};

export default DesktopNavigationBar;
