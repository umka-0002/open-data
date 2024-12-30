import { SectionData } from "./types";
import { StatData } from "./types";

// Данные для обучающихся
export const studentsData: StatData[] = [
  { region: "Ошская", value: 27303, color: "#6c5ce7" },
  { region: "Джалал-Абадская", value: 26685, color: "#fdcb6e" },
  { region: "Чуйская", value: 22755, color: "#00b894" },
  { region: "город Бишкек", value: 21340, color: "#e17055" },
  { region: "Баткенская", value: 12682, color: "#0984e3" },
  { region: "Ыссык-Кульская", value: 10429, color: "#d63031" },
  { region: "город Ош", value: 9602, color: "#6c5ce7" },
  { region: "Нарынская", value: 6364, color: "#fdcb6e" },
  { region: "Таласская", value: 5774, color: "#00b894" },
];

// Данные для сотрудников
export const staffData: StatData[] = [
  { region: "Ошская", value: 3640, color: "#6c5ce7" },
  { region: "Джалал-Абадская", value: 3424, color: "#fdcb6e" },
  { region: "город Бишкек", value: 2902, color: "#00b894" },
  { region: "Чуйская", value: 2210, color: "#e17055" },
  { region: "Баткенская", value: 7491, color: "#0984e3" },
  { region: "город Ош", value: 1423, color: "#6c5ce7" },
  { region: "Ыссык-Кульская", value: 1368, color: "#d63031" },
  { region: "Нарынская", value: 1505, color: "#fdcb6e" },
  { region: "Таласская", value: 859, color: "#00b894" },
];

// Данные для организаций
export const organizationsData: StatData[] = [
  { region: "Ошская", value: 1078, color: "#6c5ce7" },
  { region: "Джалал-Абадская", value: 897, color: "#fdcb6e" },
  { region: "Чуйская", value: 601, color: "#00b894" },
  { region: "город Бишкек", value: 504, color: "#e17055" },
  { region: "Баткенская", value: 476, color: "#0984e3" },
  { region: "Ыссык-Кульская", value: 358, color: "#d63031" },
  { region: "Нарынская", value: 311, color: "#fdcb6e" },
  { region: "Таласская", value: 210, color: "#00b894" },
  { region: "город Ош", value: 201, color: "#6c5ce7" },
];

// Данные для компьютеров
export const computersData: StatData[] = [
  { region: "город Бишкек", value: 1265, color: "#6c5ce7" },
  { region: "Джалал-Абадская", value: 1224, color: "#fdcb6e" },
  { region: "Чуйская", value: 665, color: "#00b894" },
  { region: "Нарынская", value: 655, color: "#e17055" },
  { region: "Ошская", value: 591, color: "#0984e3" },
  { region: "Баткенская", value: 533, color: "#d63031" },
  { region: "город Ош", value: 273, color: "#6c5ce7" },
  { region: "Таласская", value: 258, color: "#fdcb6e" },
  { region: "Ыссык-Кульская", value: 200, color: "#00b894" },
];


export const statisticsData: SectionData[] = [
  {
    section: "По обучающимся",
    items: [{ label: "", value: 1429464 }],
  },
  {
    section: "По сотрудникам",
    items: [{ label: "", value: 187432 }],
  },
  {
    section: "По организациям",
    items: [{ label: "", value: 4636 }],
  },
  {
    section: "По типам образования",
    items: [
      { label: "ДОО", value: 1904 },
      { label: "ОО", value: 2410 },
      { label: "НПО", value: 98 },
      { label: "СПО", value: 140 },
      { label: "ВПО", value: 84 },
    ],
  },
  {
    section: "По форме собственности",
    items: [
      { label: "Государственная", value: 3140 },
      { label: "Муниципальная", value: 1013 },
      { label: "Частная", value: 479 },
      { label: "Иная", value: 4 },
    ],
  },
  {
    section: "По полу сотрудников",
    items: [
      { label: "Женский", value: 149629 },
      { label: "Мужской", value: 37803 },
    ],
  },
  {
    section: "По полу обучающихся",
    items: [
      { label: "Женский", value: 703825 },
      { label: "Мужской", value: 725639 },
    ],
  },
];

export const chartData = [
  {
    title: 'Количество обучающихся ДОО',
    labels: ['2-3г', '3-4г', '4-5г', '5-6г', '6-7г', '7-8л'],
    datasets: [
      { label: 'Всего', data: [30, 40, 50, 60, 45, 30], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [15, 20, 25, 30, 22, 15], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [15, 20, 25, 30, 23, 15], backgroundColor: '#00b894' },
    ],
    total: 1387,
  },
  {
    title: 'Количество обучающихся ОО',
    labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
    datasets: [
      { label: 'Всего', data: [134000, 139000, 142000, 140000, 138000, 137000, 135000, 130000, 126000, 120000, 118000, 116000], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [65000, 67000, 69000, 69000, 68000, 67000, 66000, 64000, 62000, 60000, 59000, 58000], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [69000, 72000, 73000, 71000, 70000, 70000, 69000, 66000, 64000, 60000, 59000, 58000], backgroundColor: '#00b894' },
    ],
    total: 1345442,
  },
  {
    title: 'Количество обучающихся НПО',
    labels: ['1 курс', '2 курс', '3 курс', '4 курс'],
    datasets: [
      { label: 'Всего', data: [16000, 12000, 8000, 5000], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [7000, 5000, 3000, 2000], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [9000, 7000, 5000, 3000], backgroundColor: '#00b894' },
    ],
    total: 26077,
  },
  {
    title: 'Количество обучающихся СПО',
    labels: ['1 курс', '2 курс', '3 курс', '4 курс'],
    datasets: [
      { label: 'Всего', data: [8000, 9000, 10000, 7000], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [4000, 5000, 6000, 3000], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [4000, 4000, 4000, 4000], backgroundColor: '#00b894' },
    ],
    total: 27919,
  },
  {
    title: 'Количество обучающихся ВПО',
    labels: ['1 курс', '2 курс', '3 курс', '4 курс', '5 курс', '6 курс'],
    datasets: [
      { label: 'Всего', data: [1200, 1300, 1500, 1600, 1800, 1200], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [600, 700, 800, 800, 1000, 600], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [600, 600, 700, 800, 800, 600], backgroundColor: '#00b894' },
    ],
    total: 6613,
  },
  {
    title: 'Количество сотрудников по составу',
    labels: ['Преподавательский', 'Непреподавательский'],
    datasets: [
      { label: 'Всего', data: [120000, 67000], backgroundColor: '#6c5ce7' },
      { label: 'Женский', data: [95000, 54000], backgroundColor: '#fdcb6e' },
      { label: 'Мужской', data: [25000, 13000], backgroundColor: '#00b894' },
    ],
    total: 187432,
  },
];

export const charts = [
  {
    title: "По типам образования",
    labels: ["ОО", "ДОО", "СПО", "НПО", "ВПО"],
    data: [2410, 1904, 140, 98, 84],
    colors: ["#E57373", "#81C784", "#64B5F6", "#FFD54F", "#4DB6AC"],
  },
  {
    title: "По форме собственности",
    labels: ["Государственная", "Муниципальная", "Частная", "Иная"],
    data: [3140, 1013, 479, 4],
    colors: ["#42A5F5", "#AB47BC", "#FF7043", "#9E9E9E"],
  },
  {
    title: "По виду интернета",
    labels: ["Оптоволокно", "Беспроводной", "Мобильный", "Спутниковый"],
    data: [172, 16, 5, 2],
    colors: ["#29B6F6", "#66BB6A", "#FFA726", "#8D6E63"],
  },
  {
    title: "По языку обучения",
    labels: ["Кыргызский", "Русский", "Другие языки", "Узбекский", "Таджикский"],
    data: [37283, 19035, 310, 2428, 123],
    colors: ["#1E88E5", "#D81B60", "#FFC107", "#26A69A", "#8E24AA"],
  },
  {
    title: "По полу сотрудников",
    labels: ["Женский", "Мужской"],
    data: [149629, 37803],
    colors: ["#AB47BC", "#29B6F6"],
  },
  {
    title: "По полу обучающихся",
    labels: ["Женский", "Мужской"],
    data: [703825, 725639],
    colors: ["#FF7043", "#42A5F5"],
  },
];