import React from "react";
import { useAtom } from "jotai";
import { useForm } from "../../../entities/search/hooks/useForm";
import {
  regions,
  organizationLevels,
  ownershipForms,
  educationLanguages,
} from "../../../entities/search/model/constants";
import { Input } from "./Input";
import { Select } from "shared/ui/Select";
import { Link } from "react-router-dom";
import { modalOpenAtom } from "entities/search/model/atoms";

export const Modal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(modalOpenAtom);
  const {
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
  } = useForm();

  if (!isModalOpen) return null;

  return (
    <div className="inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 absolute">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-3xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-800">
          Расширенный поиск
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Input
            type="text"
            placeholder="Поиск образовательной организации по названию"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Обновляет состояние search
          />
          <Input
            type="text"
            placeholder="Введите код ОКПО"
            value={okpoCode}
            onChange={(e) => setOkpoCode(e.target.value)} // Обновляет состояние okpoCode
          />
          <Select options={regions} value={region} onChange={setRegion} />
          <Select
            options={organizationLevels}
            value={organizationLevel}
            onChange={setOrganizationLevel}
          />
          <Select
            options={ownershipForms}
            value={ownershipForm}
            onChange={setOwnershipForm}
          />
          <Select
            options={educationLanguages}
            value={educationLanguage}
            onChange={setEducationLanguage}
          />
        </div>
        <div className="flex justify-between px-9">
          <Link to='/region-page'>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Найти
          </button></Link>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
