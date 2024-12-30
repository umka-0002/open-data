import { useAtom } from "jotai";
import { languageAtom, dataTypeAtom, dateRangeAtom, categoriesAtom } from "../../dropdown/model/constants";

export const useHeaderState = () => {
  const [language, setLanguage] = useAtom(languageAtom);
  const [dataType, setDataType] = useAtom(dataTypeAtom);
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [categories, setCategories] = useAtom(categoriesAtom);


  return { language, setLanguage, dataType, setDataType, dateRange, setDateRange, categories, setCategories };
};
