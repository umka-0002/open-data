import React, { useState } from "react";
import { useOrganizationData } from "entities/organization/hooks/useOrganizationData";
import EducationMap from "widgets/map/ui/EducationMap";
import { charts, TABS_CONFIG } from "entities/organization/model/constants";
import { PieChart } from "shared/ui/PieChart";
import OrganizationTabs from "features/organization-tabs/ui/OrganizationTabs";

const Organization = () => {
  const organization = useOrganizationData();
  const [activeTab, setActiveTab] = useState("about");

  if (!organization) {
    return <div>Loading...</div>;
  }

  // Find the active tab's component from TABS_CONFIG
  const ActiveTabComponent = TABS_CONFIG.find(
    (tab) => tab.key === activeTab
  )?.component;

  return (
    <div className="p-6">
      <div className="flex flex-col items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-800">ОРГАНИЗАЦИЯ</h1>
      </div>

      <div className="flex">
        <EducationMap />
        <div className="flex flex-col items-center mb-6 ">
          <h2 className="text-base p-5 text-gray-700">
            {organization.full_name}
          </h2>

          <OrganizationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-h-96 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 [&::-webkit-scrollbar-thumb]:rounded-full">
            {ActiveTabComponent && (
              <ActiveTabComponent organization={organization} />
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-evenly gap-x-20 gap-y-14 pt-10">
        {charts.map((chart, index) => (
          <PieChart
            key={index}
            title={chart.title}
            labels={chart.labels}
            data={chart.data}
            colors={chart.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default Organization;
