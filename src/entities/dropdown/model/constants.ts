import { atom } from "jotai";
import { Option } from "./types";


export const languageOptions: Option[] = [
  { value: "РУС", label: "РУС" },
  { value: "ENG", label: "ENG" },
  { value: "КЫР", label: "КЫР" },
];

export const dataTypeOptions: Option[] = [
  { value: "ВСЕ", label: "ВСЕ" },
  { value: "Гос.", label: "Государственная" },
  { value: "Част.", label: "Частная" },
  { value: "Мун.", label: "Муниципальная" },
  { value: "Иная", label: "Иные" },
];

export const categoriesOptions: Option[] = [
  { value: "ВОО", label: "Все образовательные организации" },
  { value: "ДО", label: "Дошкольное образование (ДО)" },
  { value: "ОО", label: "Общее образование (ОО)" },
  { value: "НПО", label: "Начальное профессиональное образование (НПО)" },
  { value: "СПО", label: "Среднее профессиональное образование (СПО)" },
  { value: "ВПО", label: "Высшее профессиональное образование (ВПО)" },
  { value: "ДРУГИЕ", label: "Другие образовательные организации" },
];


export const dateRangeOptions: Option[] = [
  { value: "2021-2022", label: "2021-2022" },
  { value: "2022-2023", label: "2022-2023" },
  { value: "2023-2024", label: "2023-2024" },
  { value: "2024-2025", label: "2024-2025" },
];

// Создание атомов с начальным значением из первого элемента массива
export const languageAtom = atom(languageOptions[0].value);
export const dataTypeAtom = atom(dataTypeOptions[0].value);
export const dateRangeAtom = atom(dateRangeOptions[2].value); 
export const categoriesAtom = atom(categoriesOptions[0].value); 
