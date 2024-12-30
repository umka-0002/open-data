import { ChartConfig } from "./types";
import { studentsData, staffData, organizationsData, computersData } from "./constants";

// Функция для создания конфигурации графика
const createChartConfig = (title: string, data: typeof studentsData, label: string): ChartConfig => {
  return {
    title,
    labels: data.map((item) => item.region),
    datasets: [
      {
        label,
        data: data.map((item) => item.value),
        backgroundColor: data.map((item) => item.color),
      },
    ],
    total: data.reduce((sum, item) => sum + item.value, 0),
  };
};

// Конфигурации графиков
export const studentsChart = createChartConfig(
  "Количество обучающихся",
  studentsData,
  "Всего"
);

export const staffChart = createChartConfig(
  "Количество сотрудников",
  staffData,
  "Всего"
);

export const organizationsChart = createChartConfig(
  "Количество организаций",
  organizationsData,
  "Всего"
);

export const computersChart = createChartConfig(
  "Количество компьютеров",
  computersData,
  "Всего"
);

// Все графики в массиве
export const chartsData: ChartConfig[] = [studentsChart, staffChart, organizationsChart, computersChart];
