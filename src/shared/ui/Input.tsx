import React from 'react';
import { InputProps } from 'entities/dropdown/model/types';


export const Input: React.FC<InputProps> = ({ onChange, ...props }) => {
  return (
    <input
      {...props}
      onChange={(e) => onChange(e.target.value)} 
    />
  );
};
