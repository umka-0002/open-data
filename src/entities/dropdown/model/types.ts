import { MenuProps } from "antd";
import { InputHTMLAttributes } from "react";

export interface Option {
  value: string;
  label: string;
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (value: string) => void;
}

export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

export const createMenuItems = (options: Option[]): MenuProps["items"] =>
  options.map((option) => ({
    key: option.value,
    label: option.label,
  }));

export interface CustomDropdownProps {
  options: MenuProps["items"];
  value: string;
  onChange: (value: string) => void;
  title: string;
}
