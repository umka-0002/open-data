import { atom } from 'jotai';


export const searchAtom = atom<string>('');

// Атом для кода ОКПО
export const okpoCodeAtom = atom<string>('');

// Атом для выбранного региона
export const regionAtom = atom<string>('');

// Атом для уровня образовательной организации
export const organizationLevelAtom = atom<string>('');

// Атом для формы собственности
export const ownershipFormAtom = atom<string>('');

// Атом для языка обучения
export const educationLanguageAtom = atom<string>('');

// Атом для управления состоянием модального окна
export const modalOpenAtom = atom<boolean>(false);

// Атом для строки поиска с дебаунсом
export const searchQueryAtom = atom<string>('');

