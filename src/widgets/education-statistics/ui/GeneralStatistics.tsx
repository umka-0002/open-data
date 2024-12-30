import { statisticsData } from 'entities/statistics/model/constants';
import React from 'react';


const GeneralStatistics: React.FC = () => {


  return (
    <div className="w-96 p-4 bg-white h-fit shadow text-sm rounded-lg text-gray-800">
      <h2 className="text-center font-semibold text-base mb-4">Кыргызстан</h2>
      {statisticsData.map((section, index) => (
        <div key={index} className="mb-2">
          <h3 className="font-medium ">{section.section} :</h3>
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.label}</span>
                <span>{item.value.toLocaleString()}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GeneralStatistics;
