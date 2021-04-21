import React from "react";

import {
  TopNavigation,
  TopNavigationAction,
  Icon,
  IconProps,
} from "@ui-kitten/components";

import { useNavigation } from "@react-navigation/native";

const MobileNavigationBar = (): React.ReactNode => {
  const navigation = useNavigation();

  // eslint-disable-next-line react/jsx-props-no-spreading
  const MenuIcon = (props: IconProps) => <Icon {...props} name="menu" />;

  const AccessoryLeft = () => (
    <TopNavigationAction
      icon={MenuIcon}
      onPress={() => navigation.openDrawer()}
    />
  );

  return (
    <TopNavigation accessoryLeft={AccessoryLeft} title="podCloud Studio" />
  );
};

export default MobileNavigationBar;
