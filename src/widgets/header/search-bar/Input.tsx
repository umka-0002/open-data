import React from 'react';
import { InputProps } from 'entities/search/model/types';

export const Input: React.FC<InputProps> = (props) => (
  <input
    {...props}
    className="px-4 py-2 w-full text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  />
);
