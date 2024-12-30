
export interface ChartProps {
    title: string;
    labels: string[];
    data: number[];
    colors: string[];
  }

export interface BarChartProps {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
  total: number;
}

export interface StatData {
    region: string;
    value: number;
    color: string;
  }

export interface DataItem {
  label: string;
  value: string | number;
}

export interface SectionData {
  section: string;
  items: DataItem[];
}

export interface ChartConfig {
  title: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
  }[];
  total: number;
}
