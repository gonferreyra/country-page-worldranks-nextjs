import { CountriesSortContext } from '@/contexts/countries-sort-context-provider';
import { ApiResponse } from '@/interfaces/interface';
import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

export function useCountriesSortContext() {
  const context = useContext(CountriesSortContext);

  if (!context) {
    throw new Error(
      'useCountriesSortContext must be used within a CountriesSortContextProvider'
    );
  }

  return context;
}

const fetchCountries = async (): Promise<ApiResponse[]> => {
  const res = await fetch('https://restcountries.com/v3.1/all', {
    // cache: 'no-store',
  });
  // https://restcountries.com/v3.1/all?fields=name,capital,currencies

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }

  const data = await res.json();

  return data;
};

export const useCountriesQuery = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return { data, isLoading, isError, error };
};

const fetchByName = async (countryName: string) => {
  const res = await fetch(`https://restcountries.comv3.1/name/${countryName}`);

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message);
  }

  const data = await res.json();

  return data;
};
