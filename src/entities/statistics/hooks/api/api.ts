import axios from "axios";

export const fetchAggregates = async (params: {
  yearId: number;
  type?: string;
  regionId?: number;
  districtId?: number;
}) => {
  try {
    const response = await axios.get("http://localhost:3100/api/institutions?yearId=2024", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при запросе данных:", error);
    throw error;
  }
};
