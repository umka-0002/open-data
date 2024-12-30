import React, { useState } from "react";
import { charts } from "entities/statistics/model/constants";
import { PieChart } from "shared/ui/PieChart";
import EducationMap from "widgets/map/ui/EducationMap";
import { Button } from "antd";
import {
  categoriesOptions,
  organizations,
} from "entities/organization/model/constants";
import { useOrganizationData } from "entities/organization/hooks/useOrganizationData";
import { Link } from "react-router-dom";

type CategoryKey = "ДО" | "ООО" | "НПО" | "СПО" | "ВПО";

const RegionPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(
    null
  );
  const [selectedOrganization, setSelectedOrganization] = useState<
    string | null
  >(null);

  const organization = useOrganizationData();

  if (!organization) {
    return <div>Loading...</div>;
  }


  return (
    <div className="min-h-screen">
      {/* Заголовок страницы */}
      <div className="py-4 px-6 mb-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-700">
          Образовательные организации Ат-Башинский р-н
        </h1>
        <p className="text-gray-500">
          Выберите вкладку для просмотра информации об организациях
        </p>
      </div>

      <div className="container mx-auto px-6">
        {/* Карта */}
        <div className="flex">
          <EducationMap />
          <div className="flex flex-col gap-4 w-[1200px] pt-16">
            {/* Категории */}
            <div className="flex justify-evenly">
              {categoriesOptions.map((category) => (
                <Button
                  key={category.value}
                  type={
                    selectedCategory === category.value ? "primary" : "default"
                  }
                  onClick={() =>
                    setSelectedCategory(category.value as CategoryKey)
                  }
                >
                  {category.value} ({category.count})
                </Button>
              ))}
            </div>

            {/* Организации */}
            <div className="border p-4 rounded shadow text-start">
              <h3 className="text-lg font-bold">
                {selectedCategory
                  ? `Организации категории: ${
                      categoriesOptions.find(
                        (c) => c.value === selectedCategory
                      )?.label
                    }`
                  : "Выберите категорию"}
              </h3>
              <div className="flex flex-col gap-2 mt-2">
                {selectedCategory &&
                  (organizations[selectedCategory]?.length ? (
                    organizations[selectedCategory].map((org, index) => (
                      <Button
                        className="flex justify-between"
                        key={index}
                        type={
                          selectedOrganization === org.name
                            ? "primary"
                            : "default"
                        }
                        onClick={() => setSelectedOrganization(org.name)}
                      >
                        {org.name}
                        <div className=" flex">
                          <Link to="/organization" className="px-5">
                            Подробнее
                          </Link>{" "}
                          <div className="px-4">{org.details.students}</div>{" "}
                        </div>
                      </Button>
                    ))
                  ) : (
                    <p>Нет организаций в этой категории.</p>
                  ))}
              </div>
            </div>

          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {charts.map((chart, index) => (
            <PieChart
              key={index}
              title={chart.title}
              labels={chart.labels}
              data={chart.data}
              colors={chart.colors}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionPage;
