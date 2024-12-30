import React from "react";
import { useAtom } from "jotai";
import { Modal } from "./Modal";
import { modalOpenAtom } from "entities/search/model/atoms";

const AdvancedSearchLink: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useAtom(modalOpenAtom);

  return (
    <div className="ml-4 text-gray-700">
      <button
        onClick={() => setIsModalOpen(true)}
        className={`px-1 py-2 w-44 text-sm rounded ${
          isModalOpen ? "bg-blue-700 text-gray-200" : "bg-blue-500 text-white"
        }`}
      >
        Расширенный поиск
      </button>
      {isModalOpen && <Modal />}
    </div>
  );
};

export default AdvancedSearchLink;
