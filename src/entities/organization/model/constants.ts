import { AboutTab } from 'widgets/organization/ui/AboutTab';
import { EmployeesTab } from 'widgets/organization/ui/EmployeesTab';
import { FinanceTab } from 'widgets/organization/ui/FinanceTab';
import { GroupsTab } from 'widgets/organization/ui/GroupsTab';
import { LanguagesTab } from 'widgets/organization/ui/LanguagesTab';
import { StudentsTab } from 'widgets/organization/ui/StudentsTab';
import { InfrastructureTab } from 'widgets/organization/ui/InfrastructureTab';
import data from '../../../data.json';

export interface CategoryOption {
  value: string;
  label: string;
  count: number;
}

export const categoriesOptions: CategoryOption[] = [
  { value: 'ДО', label: 'Дошкольное образование (ДО)', count: 2 },
  { value: 'ОО', label: 'Общее образование (ОО)', count: 0 },
  { value: 'НПО', label: 'Начальное профессиональное образование (НПО)', count: 1 },
  { value: 'СПО', label: 'Среднее профессиональное образование (СПО)', count: 0 },
  { value: 'ВПО', label: 'Высшее профессиональное образование (ВПО)', count: 0 },
];

export const organizations = {
  ДО: [
    { name: "Учреждение 'Детский сад Аюу Мамалак'", details: { students: 88 } },
    { name: "Учреждение 'Детский сад Ырыскы-Талдысу'", details: { students: 42 } },
  ],
  НПО: [{ name: 'Профессиональное училище №1', details: { students: 120 } }],
  СПО: [],
  ВПО: [],
  ООО: [],
};

export const TABS_CONFIG = [
  { key: 'about', label: 'Об организации', component: AboutTab },
  { key: 'employees', label: 'По сотрудникам', component: EmployeesTab },
  { key: 'finance', label: 'Финансирование', component: FinanceTab },
  { key: 'groups', label: 'По группам', component: GroupsTab },
  { key: 'languages', label: 'Язык обучения', component: LanguagesTab },
  { key: 'students', label: 'По воспитанникам', component: StudentsTab },
  { key: 'infrastructure', label: 'Материально-техническая база', component: InfrastructureTab },
];

// Вспомогательная функция для создания диаграмм
const createChart = (title: string, labels: string[], dataValues: number[], colors: string[]) => ({
  title,
  labels,
  data: dataValues,
  colors,
});

export const charts = [
  createChart(
    'По языку обучения',
    ['Кыргызский', 'Русский', 'Другие языки', 'Узбекский', 'Таджикский'],
    [
      data.org_7.stdnt_in_kg_classes || 0,
      data.org_7.stdnt_in_ru_classes || 0,
      data.org_7.stdnt_in_oth_classes || 0,
      data.org_7.stdnt_in_uz_classes || 0,
      data.org_7.stdnt_in_tj_classes || 0,
    ],
    ['#1E88E5', '#D81B60', '#66BB6A', '#FFCA28', '#9C27B0']
  ),
  createChart(
    'По полу сотрудников',
    ['Женский', 'Мужской'],
    [data.org_7.workers_in_fact_women || 0, data.org_1.workers_in_fact_men || 0],
    ['#AB47BC', '#42A5F5']
  ),
  createChart(
    'По полу обучающихся',
    ['Женский', 'Мужской'],
    [data.org_7.total_stdnts_girls || 0, data.org_1.total_stdnts_boys || 0],
    ['#FF7043', '#42A5F5']
  ),
];
