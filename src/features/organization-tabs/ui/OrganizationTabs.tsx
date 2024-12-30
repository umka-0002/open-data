import React from "react";
import { TABS_CONFIG } from "entities/organization/model/constants";

interface TabsProps {
  activeTab: string;
  setActiveTab: (key: string) => void;
}

const OrganizationTabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {Object.values(TABS_CONFIG).map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors duration-300 ${
            activeTab === tab.key
              ? "bg-blue-600 text-white"
              : "bg-white shadow-md text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default OrganizationTabs;
