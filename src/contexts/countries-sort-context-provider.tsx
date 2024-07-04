import { ApiResponse } from '@/interfaces/interface';
import { buttons } from '@/lib/constants';
import { useCountriesQuery } from '@/lib/hooks';
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

type CountriesSortContextType = {
  sortBy: string;
  handleChangeSortBy: (value: string) => void;
  handleButtonSelection: (index: number) => void;
  selectedButtons: number[];
  selectedContinents: string[];
  // countriesSortedAndFiltered: ApiResponse[] | undefined;
  selectedCheckbox: string[];
  handleCheckboxChange: (value: string) => void;
  // countriesSortedFilteredAndStatus: ApiResponse[] | undefined;
  searchBy: string;
  handleSearchBy: (value: string) => void;
  countriesSearchBy: ApiResponse[] | undefined;
};

export const CountriesSortContext =
  createContext<CountriesSortContextType | null>(null);

export default function CountriesSortContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sortBy, setSortBy] = useState('population');
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);
  const [selectedContinents, setSelectedContinents] = useState([] as string[]);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([]);
  const [searchBy, setSearchBy] = useState('');
  const [countriesSearchBy, setCountriesSearchBy] = useState<ApiResponse[]>([]);

  const { data, isLoading, isError, error } = useCountriesQuery();

  const countriesSorted = useMemo(
    () =>
      [...(data || [])].sort((a, b) => {
        if (sortBy === 'population') {
          return b.population - a.population;
        } else if (sortBy === 'area') {
          return b.area - a.area;
        } else if (sortBy === 'name') {
          return a.name.common.localeCompare(b.name.common);
        }
        return 0;
      }),
    [data, sortBy]
  );

  const countriesSortedAndFiltered = useMemo(
    () =>
      countriesSorted.filter((country) => {
        if (selectedContinents.length === 0) {
          return true;
        }
        return selectedContinents.includes(country.region);
      }),
    [countriesSorted, selectedContinents]
  );

  const countriesSortedFilteredAndStatus = useMemo(() => {
    return countriesSortedAndFiltered.filter((country) => {
      if (selectedCheckbox.length === 0) return true;

      if (selectedCheckbox.includes('independent')) {
        return country.independent === true;
      } else if (selectedCheckbox.includes('member')) {
        return country.unMember === true;
      }
    });
  }, [countriesSortedAndFiltered, selectedCheckbox]);

  const countriesBySearch = useCallback(
    (searchValue: string) => {
      setCountriesSearchBy(countriesSortedAndFiltered);
      if (!searchValue) {
        setCountriesSearchBy(countriesSortedFilteredAndStatus);
        return;
      }
      if (searchValue.length < 3) return;

      setCountriesSearchBy(
        countriesSorted.filter(
          (country) =>
            country.name.common
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            country.region
              .toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase()) ||
            country.subregion
              ?.toLocaleLowerCase()
              .includes(searchValue.toLocaleLowerCase())
        )
      );
    },
    [
      countriesSortedAndFiltered,
      countriesSortedFilteredAndStatus,
      countriesSorted,
    ]
  );

  const handleButtonSelection = (index: number) => {
    setSelectedButtons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleChangeSortBy = useCallback((value: string) => {
    setSortBy(value);
  }, []);

  const handleCheckboxChange = (status: string) => {
    setSelectedCheckbox((prev) => {
      if (prev.includes(status)) {
        return prev.filter((item) => item !== status);
      } else {
        return [...prev, status];
      }
    });
  };

  const handleSearchBy = (value: string) => {
    setSearchBy(value);
  };

  useEffect(() => {
    const newContinents = selectedButtons.map((index) => buttons[index].value);
    setSelectedContinents(newContinents);
  }, [selectedButtons]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      countriesBySearch(searchBy);
    }, 500);

    return () => clearTimeout(timerId);
  }, [countriesSortedAndFiltered, searchBy, countriesBySearch]);

  return (
    <CountriesSortContext.Provider
      value={{
        sortBy,
        handleChangeSortBy,
        handleButtonSelection,
        selectedButtons,
        selectedContinents,
        selectedCheckbox,
        handleCheckboxChange,
        searchBy,
        handleSearchBy,
        countriesSearchBy,
      }}
    >
      {children}
    </CountriesSortContext.Provider>
  );
}
