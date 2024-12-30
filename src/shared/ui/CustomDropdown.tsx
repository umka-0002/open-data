import React from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { CustomDropdownProps } from "entities/dropdown/model/types";



const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  title,
}) => {
  const menu: MenuProps = {
    items: options,
    onClick: (e) => onChange(e.key),
  };

  return (
    <Dropdown menu={menu}>
      <Button>
        {title}{value}
      </Button>
    </Dropdown>
  );
};

export default CustomDropdown;
