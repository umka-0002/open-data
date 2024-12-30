import React from "react";
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
      <header className="flex justify-between shadow-md top-0 w-full items-center py-2 px-9 bg-violet-50">
        <div className="flex items-center gap-2">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="46"
              viewBox="0 0 40 46"
              fill="none"
            >
              <path
                d="M26.756 10.3898C22.0696 13.981 19.7673 20.3215 18.4784 24.181C18.9403 21.2901 19.3575 17.8479 15.7142 14.6069C13.5311 17.1848 13.1586 21.3646 14.6711 24.4865C13.7323 23.4434 11.2214 21.1411 7.4067 20.4035C5.57384 20.0459 3.27904 20.1353 0.999146 20.8878C3.48766 13.6309 10.3646 8.42285 18.4635 8.42285C21.4512 8.42285 24.2675 9.13066 26.756 10.3898Z"
                fill="#0C3B98"
              />
              <path
                d="M36.9242 26.8855C36.9242 37.0855 28.6614 45.3483 18.4615 45.3483C15.5408 45.3483 12.7766 44.6702 10.3254 43.4632C14.1848 41.988 18.5434 38.9928 21.6057 29.158C24.5189 19.8223 26.1878 14.8676 28.9445 11.6862C33.7651 15.0167 36.9242 20.5823 36.9242 26.8855Z"
                fill="#0C3B98"
              />
              <path
                d="M12.7704 33.2335C12.7704 36.9365 10.6917 40.1552 7.61456 41.8241C3.00261 38.4713 0 33.0323 0 26.8856C0 25.8201 0.0894078 24.777 0.268223 23.7563C1.08034 23.5477 1.93717 23.4359 2.81635 23.4359C8.31492 23.4359 12.7704 27.8243 12.7704 33.2335Z"
                fill="#0C3B98"
              />
              <path
                d="M39.9576 0.651733C39.9576 1.25524 37.3424 4.52607 32.7975 5.54681C29.8098 6.21737 28.2377 7.12635 27.0084 7.63299C27.5076 6.40363 29.6086 3.68415 32.5889 2.81987C36.3142 1.74698 38.3184 1.46385 39.9576 0.651733Z"
                fill="#FE0304"
              />
            </svg>
          </Link>
          <div className="text-xs w-52">
            <p className="text-blue-600 font-medium leading-none ">
              ИНФОРМАЦИОННАЯ СИСТЕМА УПРАВЛЕНИЯ ОБРАЗОВАНИЕМ
            </p>
            <p className="text-red-600">ОТКРЫТЫЕ ДАННЫЕ</p>
          </div>
        </div>

        <div className="items-center  w-2/4">
          <div className="flex items-center w-full">
            <SearchBar />
            <AdvancedSearchLink />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Space direction="horizontal">
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

          <Link to={"https://emis.edu.gov.kg/"}>
            <button className=" bg-blue-500 text-white px-4 py-1.5 rounded-md shadow-md">
              Войти
            </button>
          </Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Header;
