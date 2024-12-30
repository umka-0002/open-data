import axios from "axios";
import { Option } from "../model/types";

export const fetchDateRangeOptions = async (): Promise<Option[]> => {
  try {
    const response = await axios.get("http://localhost:3100/api/");
    return response.data;
  } catch (error) {
    console.error("Error fetching date range options:", error);
    return [];
  }
};
