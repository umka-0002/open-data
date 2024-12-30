import React from "react";
import { TABS_CONFIG } from "entities/organization/model/constants";

export const ActiveTabs = ({ activeTab, organization }: { activeTab: string; organization: any }) => {
  const activeTabConfig = TABS_CONFIG.find(tab => tab.key === activeTab);
  if (!activeTabConfig) return null; // Handle invalid tab

  const TabComponent = activeTabConfig.component;
  return <TabComponent organization={organization} />;
};
