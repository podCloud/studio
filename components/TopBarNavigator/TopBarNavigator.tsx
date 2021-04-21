import React from "react";

import { Layout, Divider } from "@ui-kitten/components";

import { useIsMobile } from "../../hooks";

import MobileNavigationBar from "./MobileNavigationBar";
import DesktopNavigationBar from "./DesktopNavigationBar";

const TopBarNavigator = (): React.ReactNode => {
  const isMobile = useIsMobile();

  return (
    <Layout>
      {isMobile ? <MobileNavigationBar /> : <DesktopNavigationBar />}
      <Divider />
    </Layout>
  );
};

export default TopBarNavigator;
