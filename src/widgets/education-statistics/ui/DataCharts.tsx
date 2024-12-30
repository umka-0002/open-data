// src/features/education-data/ui/DataCharts.tsx
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PieChart } from "shared/ui/PieChart";
import { charts } from "entities/statistics/model/constants";

ChartJS.register(ArcElement, Tooltip, Legend);

const DataCharts: React.FC = () => {
  
  
    return (
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
    );
  };
  
export default DataCharts;
  