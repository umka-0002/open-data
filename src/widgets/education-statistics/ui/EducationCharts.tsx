import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { chartData } from 'entities/statistics/model/constants';
import BarChart from 'shared/ui/BarChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const EducationCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10 ">
      {chartData.map((chart, index) => (
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

export default EducationCharts;
