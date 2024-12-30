import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { useAtom } from "jotai";
import {
  countryAtom,
  regionAtom,
  areaAtom,
  currentLevelAtom,
} from "entities/map/model/atoms";
import MapWithGeoJSON from "features/map/ui/MapWithGeoJSON";
import { useGeoJsonLoader } from "entities/map/hooks/useGeoJson";
import { FaFileCode, FaFileExcel } from "react-icons/fa";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const EducationMap: React.FC = () => {
  const [countryData, setCountryData] = useAtom(countryAtom);
  const [regionData, setRegionData] = useAtom(regionAtom);
  const [areaData, setAreaData] = useAtom(areaAtom);
  const [currentLevel, setCurrentLevel] = useAtom(currentLevelAtom);

  const loadGeoJsonData = useGeoJsonLoader(
    setAreaData,
    setRegionData,
    setCountryData
  );

  useEffect(() => {
    if (currentLevel === "country") {
      loadGeoJsonData("country.geojson");
      setRegionData(null); // Очистка данных других уровней
      setAreaData(null);
    } else if (currentLevel === "region") {
      loadGeoJsonData("regions.geojson");
      setAreaData(null);
    } else if (currentLevel === "area") {
      loadGeoJsonData("areas.geojson");
    }
  }, [currentLevel, loadGeoJsonData, setRegionData, setAreaData]);

  const handleExport = (format: "xml" | "excel", data: any) => {
    if (!data || data.length === 0) {
      alert("No data available to export!");
      return;
    }

    if (format === "excel") {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "data.xlsx");
    } else if (format === "xml") {
      const xmlContent = `
        <?xml version="1.0" encoding="UTF-8"?>
        <root>
          ${data
            .map(
              (item: any) =>
                `<item>${Object.entries(item)
                  .map(([key, value]) => `<${key}>${value}</${key}>`)
                  .join("")}</item>`
            )
            .join("")}
        </root>
      `;
      const blob = new Blob([xmlContent], { type: "text/xml" });
      saveAs(blob, "data.xml");
    }
  };

  const dataToExport =
    currentLevel === "country"
      ? countryData
      : currentLevel === "region"
      ? regionData
      : areaData;

  const goBack = () => {
    console.log("Current level before:", currentLevel);
    if (currentLevel === "area") {
      setCurrentLevel("region");
    } else if (currentLevel === "region") {
      setCurrentLevel("country");
    }
    console.log("Current level after:", currentLevel);
  };

  return (
    <div className="w-full p-4 bg-blue-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-center font-semibold text-lg">
          Нажмите на область
        </h2>
        {currentLevel !== "country" && (
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow"
            onClick={goBack}
          >
            Назад
          </button>
        )}
      </div>
      <MapContainer
        center={[41.2044, 74.7661]}
        zoom={6}
        scrollWheelZoom={false}
        className="h-[460px] w-full rounded-lg z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapWithGeoJSON
          countryData={countryData}
          regionData={regionData}
          areaData={areaData}
          loadGeoJsonData={loadGeoJsonData}
        />
      </MapContainer>
      <div className="flex justify-between mt-4 items-center">
        <h2>Кыргызстан</h2>
        <div className="flex gap-5">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
            onClick={() => handleExport("xml", dataToExport)}
          >
            <FaFileCode />
            XML
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow"
            onClick={() => handleExport("excel", dataToExport)}
          >
            <FaFileExcel />
            Excel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationMap;
