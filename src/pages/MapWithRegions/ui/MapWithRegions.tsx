import React, { useEffect, useCallback, useState } from "react";
import { atom, useAtom } from "jotai";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaFileExcel, FaFileCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { icons } from "entities/map/model/icons";
import { handleExport } from "shared/utils/exportUtils";
import axios from "axios";

// GeoJSON Interfaces
interface GeoJsonFeature {
  type: "Feature";
  properties: {
    GID_0: string;
    COUNTRY: string;
    GID_1?: string;
    REGIONS?: string;
    GID_2?: string;
    AREAS?: string;
    [key: string]: any;
  };
  geometry: {
    type: "MultiPolygon" | "Polygon";
    coordinates: number[][][][];
  };
}

interface GeoJsonData {
  type: "FeatureCollection";
  name?: string;
  crs?: {
    type: string;
    properties: { name: string };
  };
  features: GeoJsonFeature[];
}

// Jotai atoms for managing GeoJSON data
const countryAtom = atom<GeoJsonData | null>(null);
const regionAtom = atom<GeoJsonData | null>(null);
const areaAtom = atom<GeoJsonData | null>(null);

// Custom Map Component
const MapWithGeoJSON = ({ countryData, regionData, areaData, loadGeoJsonData }: any) => {
  const map = useMap();

  // Handle GeoJSON feature interactions
  const onEachFeature = (feature: any, layer: any) => {
    layer.on({
      click: () => {
        if (feature.properties.GID_1) {
          loadGeoJsonData("areas.geojson"); // Load oblasts
        }

        // Zoom to the feature bounds
        if (feature.geometry) {
          const bounds = layer.getBounds();
          map.fitBounds(bounds); // Zoom and pan to fit the selected feature
        }

        layer.setStyle({
          color: "green", // Highlight clicked feature
          weight: 2,
        });
      },
      mouseover: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          color: "red",
          weight: 2,
        });
      },
      mouseout: (e: any) => {
        const layer = e.target;
        layer.setStyle({
          color: "blue",
          weight: 1,
        });
      },
    });

    if (feature.properties && feature.properties.COUNTRY) {
      layer.bindPopup(`Country: ${feature.properties.COUNTRY}`);
    }
    if (feature.properties && feature.properties.REGIONS) {
      layer.bindPopup(`Regions: ${feature.properties.REGIONS}`);
    }
    if (feature.properties && feature.properties.AREAS) {
      layer.bindPopup(`Areas: ${feature.properties.AREAS}`);
    }
  };

  return (
    <>
      {countryData && (
        <GeoJSON
          data={countryData}
          onEachFeature={onEachFeature}
          style={() => ({ color: "orange", weight: 1 })}
        />
      )}
      {regionData && (
        <GeoJSON
          data={regionData}
          onEachFeature={onEachFeature}
          style={() => ({ color: "orange", weight: 1 })}
        />
      )}
      {areaData && (
        <GeoJSON
          data={areaData}
          onEachFeature={onEachFeature}
          style={() => ({ color: "purple", weight: 1 })}
        />
      )}
    </>
  );
};

// Main Component
const EducationMap: React.FC = () => {
  const [countryData, setCountryData] = useAtom(countryAtom);
  const [regionData, setRegionData] = useAtom(regionAtom);
  const [areaData, setAreaData] = useAtom(areaAtom);

  const loadGeoJsonData = useCallback(async (fileName: string) => {
    try {
      
      const response = await axios.get(`/assets/${fileName}`);
      const data = response.data as GeoJsonData;
  
      if (data) {
        if (fileName === "areas.geojson") {
          setAreaData(data);
        } else if (fileName === "regions.geojson") {
          setRegionData(data);
        } else if (fileName === "country.geojson") {
          setCountryData(data);
        }
      }
    } catch (error) {
      console.error(`Error loading or processing GeoJSON file (${fileName}):`, error);
    }
  }, [setAreaData, setRegionData, setCountryData]);

  useEffect(() => {
    loadGeoJsonData("areas.geojson");
    loadGeoJsonData("regions.geojson");
    loadGeoJsonData("country.geojson");
  }, [loadGeoJsonData]);

  const [markers, setMarkers] = useState<any[]>([]); // State for storing marker data
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const fetchMarkers = useCallback(async () => {
    try {
      setLoading(true); // Set loading state
      const response = await axios.get("http://localhost:3100/api/institutions?yearId=2024");
      const data = Object.values(response.data); // Convert object to array of values
      console.log("API response:", data);

      setMarkers(data); // Set marker data
    } catch (err) {
      console.error("Error loading data map:", err);
      setError("Error loading data");
    } finally {
      setLoading(false); // Stop loading state
    }
  }, []);

  useEffect(() => {
    fetchMarkers(); // Call fetchMarkers on component mount
  }, [fetchMarkers]); // Add fetchMarkers as dependency

  return (
    <div className="w-full p-4 z-0">
      <h2 className="text-center font-semibold text-gray-700 text-lg mb-4">
        Click on an area
      </h2>
      <MapContainer
        center={[41.2044, 74.7661]}
        zoom={7}
        className="h-[460px] w-full rounded-lg"
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
        {loading ? (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50">
            <p>Loading...</p>
          </div>
        ) : (
          markers.map((org: any) => (
            <Marker
              key={org.id}
              position={[org.latitude, org.longitude]}
              icon={icons[5424]} // Use appropriate icon
            >
              <Popup>
                <div className="flex flex-col justify-between">
                  <div className="flex justify-between text-xs">
                    <p>Organization Name</p>
                    <p className="text-end">{org.name}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>OKPO Code</p>
                    <p>{org.code}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p>More about the organization</p>
                    <Link to="/organization">
                      <button className="bg-blue-600 text-white px-3 py-2 rounded-md h-fit">
                        Go
                      </button>
                    </Link>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
      {error && <div className="text-red-600 text-center mt-4">{error}</div>}
      <div className="flex justify-between mt-4 items-center">
        <h3 className="text-blue-600 font-semibold text-lg">Kyrgyzstan</h3>
        <div className="flex gap-4">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow"
            onClick={() => handleExport("xml")}
          >
            <FaFileCode />
            XML
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow"
            onClick={() => handleExport("excel")}
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
