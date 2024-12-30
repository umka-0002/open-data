import React from "react";
import { Bar } from "react-chartjs-2";
import { BarChartProps } from "entities/statistics/model/types";

const BarChart: React.FC<BarChartProps> = ({ title, labels, datasets, total }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom" as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full text-sm">
      <Bar data={data} options={options} />
      
      <div className="text-gray-500 w-full space-y-2 mt-4 ">
        {datasets.map((dataset, datasetIndex) => (
          <div key={datasetIndex} className="flex justify-between items-center">
            <div className="flex items-center">
              <span
                className="inline-block w-3 h-3 mr-2 rounded-full"
                style={{ backgroundColor: dataset.backgroundColor }}
              ></span>
              {dataset.label}
            </div>
            <div>
              {dataset.data.reduce((sum, value) => sum + value, 0)} (
              {((dataset.data.reduce((sum, value) => sum + value, 0) / total) * 100).toFixed(1)}%)
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;
