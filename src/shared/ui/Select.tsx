import React from 'react';
import { SelectProps } from 'entities/dropdown/model/types';


export const Select: React.FC<SelectProps> = ({ options, value, onChange }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="border border-gray-300 p-2 rounded"
  >
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
