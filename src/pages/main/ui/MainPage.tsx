import React from "react";
import GeneralStatistics from "widgets/education-statistics/ui/GeneralStatistics";
import EducationMap from "widgets/map/ui/EducationMap";
import EducationStats from "widgets/education-statistics/ui/EducationStats";
import EducationCharts from "widgets/education-statistics/ui/EducationCharts";
import DataCharts from "widgets/education-statistics/ui/DataCharts";

const MainPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col">
          <div className="flex w-full px-6 py-9">
            <EducationMap />
            <GeneralStatistics />
          </div>
          <DataCharts/>
          <EducationCharts/>
        <EducationStats />
        
      </div>
    </div>
  );
};

export default MainPage;
