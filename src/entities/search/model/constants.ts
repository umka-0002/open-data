import { SearchResult } from "./types";

export const mockData: SearchResult[] = [
  { value: 'Дошкольное образовательное учреждение детский сад "Алтын уя"', label: 'Детский сад "Алтын уя"' },
  { value: 'Общеобразовательное учреждение "Нур-Билим Талас"', label: '"Нур-Билим Талас"' },
  { value: 'Таласский районный детский образовательный центр', label: 'Детский образовательный центр' },
  { value: 'Таласский медицинский колледж', label: 'Медицинский колледж' },
  { value: 'Таласский профессиональный колледж', label: 'Профессиональный колледж' },
  { value: 'Таласский государственный университет', label: 'Государственный университет' },
];


export const regions = [
  { value: '', label: 'Выберите район' },
  { value: 'chuy', label: 'Чуй' },
  { value: 'talas', label: 'Талас' },
  { value: 'osh', label: 'Ош' },
  { value: 'jalalabad', label: 'Джалал-Абад' },
  { value: 'naryn', label: 'Нарын' },
  { value: 'bishkek', label: 'Бишкек' },
  { value: 'issyk-kul', label: 'Иссык-Куль' },
  { value: 'batken', label: 'Баткен' },
  { value: 'yssyk-ata', label: 'Ыссык-Ата' },
  { value: 'sokuluk', label: 'Сокулук' },
  { value: 'suusamyr', label: 'Суусамыр' },
  { value: 'at-bashy', label: 'Ат-Башы' },
];

  
  export const organizationLevels = [
    { value: '', label: 'Уровень организации' },
    { value: "ДО", label: "Дошкольное образование (ДО)" },
    { value: "ОО", label: "Общее образование (ОО)" },
    { value: "НПО", label: "Начальное профессиональное образование (НПО)" },
    { value: "СПО", label: "Среднее профессиональное образование (СПО)" },
    { value: "ВПО", label: "Высшее профессиональное образование (ВПО)" },
    { value: "ДРУГИЕ", label: "Другие образовательные организации" },
  ];
  
  export const ownershipForms = [
    { value: '', label: 'Форма собственности' },
    { value: "ВСЕ", label: "ВСЕ" },
    { value: "Гос.", label: "Гос." },
    { value: "Част.", label: "Част." },
    { value: "Мун.", label: "Мун." },
    { value: "Иная", label: "Иные" },
  ];
  
  export const educationLanguages = [
    { value: '', label: 'Язык обучения' },
    { value: "РУС", label: "РУС" },
    { value: "ENG", label: "ENG" },
    { value: "КЫР", label: "КЫР" },
  ];
  