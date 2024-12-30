import { atom } from "jotai";
import { GeoJsonData } from "./types";

export const countryAtom = atom<GeoJsonData | null>(null);
export const regionAtom = atom<GeoJsonData | null>(null);
export const areaAtom = atom<GeoJsonData | null>(null);


export const currentLevelAtom = atom<"country" | "region" | "area">("country");
