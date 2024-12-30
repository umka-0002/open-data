import { useCallback } from "react";
import axios from "axios";
import { GeoJsonData } from "../model/types";

export const useGeoJsonLoader = (
  setAreaData: (data: GeoJsonData) => void,
  setRegionData: (data: GeoJsonData) => void,
  setCountryData: (data: GeoJsonData) => void
) => {
  return useCallback(
    async (fileName: string) => {
      try {
        const response = await axios.get(`/assets/${fileName}`);
        const data = response.data as GeoJsonData;

        if (data) {
          if (fileName === "areas.geojson") setAreaData(data);
          else if (fileName === "regions.geojson") setRegionData(data);
          else if (fileName === "country.geojson") setCountryData(data);
        }
      } catch (error) {
        console.error(
          `Error loading or processing GeoJSON file (${fileName}):`,
          error
        );
      }
    },
    [setAreaData, setRegionData, setCountryData]
  );
};
