import React from 'react';
import { useSearchWithDebounce } from '../../../entities/search/hooks/useSearchWithDebounce';
import { Input } from './Input';
import { Highlight } from './Highlight';

export const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery, filteredData, noData, isOpen, setIsOpen } = useSearchWithDebounce();

  return (
    <div className="relative w-full">
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск образовательной организации по названию"
        className="px-4 py-2 w-full text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />

      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50 max-h-60 overflow-auto w-full">
          {filteredData.map((item, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 text-sm cursor-pointer"
              onClick={() => {
                setSearchQuery(item.value);
                setIsOpen(false);
              }}
            >
              <Highlight text={item.value} query={searchQuery} />
            </li>
          ))}
          {noData && (
            <li className="p-2 text-red-600 text-sm text-center">Нет данных</li>
          )}
        </ul>
      )}
    </div>
  );
};
