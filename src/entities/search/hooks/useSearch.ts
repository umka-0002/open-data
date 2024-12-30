// model/useSearch.ts
import { useCallback, useState } from 'react';
import { SearchResult } from '../model/types';
import { mockData } from '../model/constants';

export const useSearch = () => {
  const [filteredData, setFilteredData] = useState<SearchResult[]>([]);
  const [noData, setNoData] = useState<boolean>(false);

  const filterData = useCallback((query: string) => {
    if (!query) {
      setFilteredData([]);
      setNoData(false);
      return;
    }

    const result = mockData.filter((item) =>
      item.value.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(result);
    setNoData(result.length === 0);
  }, []);

  return { filteredData, noData, filterData };
};
