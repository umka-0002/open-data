// features/search-bar/hooks/useSearchWithDebounce.ts
import { useEffect, useState, useCallback } from 'react';
import { useAtom } from 'jotai';
import { useSearch } from './useSearch';
import { searchQueryAtom } from '../model/atoms';

export const useSearchWithDebounce = (debounceTime = 300) => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const { filteredData, noData, filterData } = useSearch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = useCallback(() => {
    filterData(searchQuery);
    setIsOpen(!!searchQuery);
  }, [filterData, searchQuery]);

  useEffect(() => {
    const timer = setTimeout(handleSearch, debounceTime);
    return () => clearTimeout(timer);
  }, [handleSearch, debounceTime]);

  return { searchQuery, setSearchQuery, filteredData, noData, isOpen, setIsOpen };
};
