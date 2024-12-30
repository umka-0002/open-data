import React, { useState } from "react";
import { Space } from "antd";
import CustomDropdown from "../../shared/ui/CustomDropdown";
import { useHeaderState } from "entities/search/hooks/useHeaderState";
import { languageOptions } from "entities/dropdown/model/constants";
import { Link, Outlet } from "react-router-dom";
import AdvancedSearchLink from "./search-bar/AdvancedSearchLink";
import { SearchBar } from "./search-bar/SearchBar";
import { createMenuItems } from "entities/dropdown/model/types";
import {
  categoriesOptions,
  dataTypeOptions,
  dateRangeOptions,
} from "entities/dropdown/model/constants";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для гамбургер-меню
  const {
    dataType,
    setDataType,
    dateRange,
    setDateRange,
    categories,
    language,
    setLanguage,
    setCategories,
  } = useHeaderState();

  return (
    <div className="bg-blue-50">
      <header className="flex flex-col md:flex-row justify-between shadow-md top-0 w-full items-center py-2 px-4 md:px-9 bg-violet-50">
        {/* Верхняя полоса */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="46"
                viewBox="0 0 40 46"
                fill="none"
              >
                {/* SVG Path */}
              </svg>
            </Link>
            <div className="text-xs">
              <p className="text-blue-600 font-medium leading-none">
                ИНФОРМАЦИОННАЯ СИСТЕМА УПРАВЛЕНИЯ ОБРАЗОВАНИЕМ
              </p>
              <p className="text-red-600">ОТКРЫТЫЕ ДАННЫЕ</p>
            </div>
          </div>

          {/* Гамбургер-иконка для мобильных устройств */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden block text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Основное меню */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto gap-4 my-4 md:mt-0`}
        >
          {/* Поисковая строка */}
          <div className="w-full md:w-2/4 mb-4 md:mb-0">
            <SearchBar />
          </div>

          {/* Расширенный поиск */}
          <div className="w-full md:w-auto">
            <AdvancedSearchLink />
          </div>

          {/* Выпадающие списки */}
          <div className="flex flex-wrap md:flex-nowrap items-center gap-2 w-full md:w-auto">
            <Space direction="horizontal" className="flex-wrap md:flex-nowrap">
              <CustomDropdown
                value={dateRange}
                options={createMenuItems(dateRangeOptions)}
                onChange={setDateRange}
                title=""
              />
              <CustomDropdown
                value={dataType}
                options={createMenuItems(dataTypeOptions)}
                onChange={setDataType}
                title=""
              />
              <CustomDropdown
                value={categories}
                options={createMenuItems(categoriesOptions)}
                onChange={setCategories}
                title=""
              />
              <CustomDropdown
                value={language}
                options={createMenuItems(languageOptions)}
                onChange={setLanguage}
                title=""
              />
            </Space>
          </div>

          {/* Кнопка "Войти" */}
          <div>
            <Link to={"https://emis.edu.gov.kg/"}>
              <button className="bg-blue-500 text-white px-4 py-1.5 rounded-md shadow-md w-full md:w-auto">
                Войти
              </button>
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
