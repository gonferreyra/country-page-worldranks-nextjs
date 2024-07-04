'use client';

import CountriesSortContextProvider from '@/contexts/countries-sort-context-provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CountriesSortContextProvider>{children}</CountriesSortContextProvider>
  );
}
