import React from "react";

import { Icon, Text } from "@ui-kitten/components";

import { View, StyleSheet, TouchableHighlight } from "react-native";

import TabDot from "./TabDot";

import tabStyles from "./tabStyles";

const styles = StyleSheet.create({
  podcastTab: {
    marginHorizontal: 10,
  },
});

type PodcastTabProps = {
  selected: boolean;
  onPress: () => void;
  children: React.ReactNode;
};

const PodcastTab = ({
  selected,
  onPress,
  children,
}: PodcastTabProps): React.ReactNode => {
  // eslint-disable-next-line no-console
  console.log("Rendering podcast tab");

  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={[
          tabStyles.tab,
          selected && tabStyles.selectedTab,
          styles.podcastTab,
        ]}
      >
        <View>
          <Text style={tabStyles.tabText} numberOfLines={1}>
            {children}
          </Text>
          <Icon name="arrow-down-outline" />
        </View>
        <TabDot selected={selected} />
      </View>
    </TouchableHighlight>
  );
};

export default PodcastTab;
