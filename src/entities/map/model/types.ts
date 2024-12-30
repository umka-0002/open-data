export interface GeoJsonFeature {
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

export interface GeoJsonData {
  type: "FeatureCollection";
  name?: string;
  crs?: {
    type: string;
    properties: { name: string };
  };
  features: GeoJsonFeature[];
}



