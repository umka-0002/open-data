import React, { useEffect } from "react";
import { GeoJSON, useMap } from "react-leaflet";
import { useAtom } from "jotai";
import { currentLevelAtom } from "entities/map/model/atoms";
import { GeoJsonData } from "entities/map/model/types";

interface Props {
  countryData: GeoJsonData | null;
  regionData: GeoJsonData | null;
  areaData: GeoJsonData | null;
  loadGeoJsonData: (fileName: string) => Promise<void>;
}

const MapWithGeoJSON: React.FC<Props> = ({
  countryData,
  regionData,
  areaData,
  loadGeoJsonData,
}) => {
  const [currentLevel, setCurrentLevel] = useAtom(currentLevelAtom);
  const map = useMap();

  useEffect(() => {
    const toggleScrollZoom = (e: KeyboardEvent) => {
      if (e.ctrlKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
      }
    };

    window.addEventListener("keydown", toggleScrollZoom);
    window.addEventListener("keyup", toggleScrollZoom);

    return () => {
      window.removeEventListener("keydown", toggleScrollZoom);
      window.removeEventListener("keyup", toggleScrollZoom);
    };
  }, [map]);

  const onEachFeature = (feature: any, layer: any) => {
    if (!feature || !feature.properties) return;

    layer.on({
      click: () => {
        if (feature.properties.COUNTRY) {
          setCurrentLevel("country");
          loadGeoJsonData("country.geojson");
        } else if (feature.properties.REGIONS) {
          setCurrentLevel("region");
          loadGeoJsonData("regions.geojson");
        } else if (feature.properties.AREAS) {
          setCurrentLevel("area");
          loadGeoJsonData("areas.geojson");
        }

        if (layer.getBounds) {
          const bounds = layer.getBounds();
          map.fitBounds(bounds);
        }
      },
    });

    layer.bindPopup(
      feature.properties.COUNTRY ||
        feature.properties.REGIONS ||
        feature.properties.AREAS ||
        "No data available"
    );
  };

  return (
    <>
      {currentLevel === "country" && countryData && (
        <GeoJSON data={countryData} onEachFeature={onEachFeature} />
      )}
      {currentLevel === "region" && regionData && (
        <GeoJSON data={regionData} onEachFeature={onEachFeature} />
      )}
      {currentLevel === "area" && areaData && (
        <GeoJSON data={areaData} onEachFeature={onEachFeature} />
      )}
    </>
  );
};

export default MapWithGeoJSON;
