import React from "react";
import { ChartProps } from "entities/statistics/model/types";
import { Pie } from "react-chartjs-2";


export const PieChart: React.FC<ChartProps> = ({ title, labels, data, colors }) => {
    const total = data.reduce((sum, value) => sum + value, 0);
    const percentages = data.map((value) => ((value / total) * 100).toFixed(1) + "%");
  
    const chartData = {
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors,
          borderWidth: 0,
        },
      ],
    };
  
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[320px] flex flex-col items-center space-y-4 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-700 text-center">{title}</h3>
        <div className="relative w-48 h-48">
          <Pie
            data={chartData}
            options={{
              plugins: {
                tooltip: { enabled: false },
                legend: { display: false },
              },
              cutout: "70%", // Для создания "пончика"
            }}
          />
          {/* Центральный текст */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xl font-bold text-gray-800">{total}</span>
            <span className="text-sm text-gray-500">100,0%</span>
          </div>
        </div>
        {/* Легенда с процентами */}
        <div className="text-sm text-gray-500 w-full space-y-1">
          {labels.map((label, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="flex items-center">
                <span
                  className="inline-block w-3 h-3 mr-2 rounded-full"
                  style={{ backgroundColor: colors[index] }}
                ></span>
                {label}
              </span>
              <span>
                {data[index]} ({percentages[index]})
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  