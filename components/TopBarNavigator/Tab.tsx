import React from "react";

import { Text } from "@ui-kitten/components";

import { View, TouchableHighlight } from "react-native";

import TabDot from "./TabDot";

import tabStyles from "./tabStyles";

type TabProps = {
  selected: boolean;
  onPress: () => void;
  children: React.ReactNode;
};

const Tab = ({ selected, onPress, children }: TabProps): React.ReactNode => {
  // eslint-disable-next-line no-console
  console.log("Rendering tab");

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[tabStyles.tab, selected && tabStyles.selectedTab]}>
        <Text style={tabStyles.tabText} numberOfLines={1}>
          {children}
        </Text>
        <TabDot selected={selected} />
      </View>
    </TouchableHighlight>
  );
};

export default Tab;
