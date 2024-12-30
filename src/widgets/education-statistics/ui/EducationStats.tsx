import React from "react";
import { chartsData } from "entities/statistics/model/chartConfig";
import BarChart from "shared/ui/BarChart";

const EducationStats: React.FC = () => {
  const processedChartsData = chartsData.map((chart) => ({
    ...chart,
    datasets: chart.datasets.map((dataset) => ({
      ...dataset,
      backgroundColor: dataset.backgroundColor[0],
    })),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
      {processedChartsData.map((chart, index) => (
        <BarChart
          key={index}
          title={chart.title}
          labels={chart.labels}
          datasets={chart.datasets}
          total={chart.total}
        />
      ))}
    </div>
  );
};

export default EducationStats;
