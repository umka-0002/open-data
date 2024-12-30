import { useAtom } from 'jotai';
import {
  searchAtom,
  okpoCodeAtom,
  regionAtom,
  organizationLevelAtom,
  ownershipFormAtom,
  educationLanguageAtom,
} from '../model/atoms'

export const useForm = () => {
  const [search, setSearch] = useAtom(searchAtom);
  const [okpoCode, setOkpoCode] = useAtom(okpoCodeAtom);
  const [region, setRegion] = useAtom(regionAtom);
  const [organizationLevel, setOrganizationLevel] = useAtom(organizationLevelAtom);
  const [ownershipForm, setOwnershipForm] = useAtom(ownershipFormAtom);
  const [educationLanguage, setEducationLanguage] = useAtom(educationLanguageAtom);

  return {
    search,
    setSearch,
    okpoCode,
    setOkpoCode,
    region,
    setRegion,
    organizationLevel,
    setOrganizationLevel,
    ownershipForm,
    setOwnershipForm,
    educationLanguage,
    setEducationLanguage,
  };
};
