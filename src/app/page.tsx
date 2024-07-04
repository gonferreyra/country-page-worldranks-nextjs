import Image from 'next/image';
import SelectedButtons from '../components/selected-buttons';
import CountryTable from '../components/country-table';
import SortBy from '@/components/sort-by';
import StatusCheckbox from '@/components/status-checkbox';
import SearchBy from '@/components/search-by';

export default function Home() {
  return (
    <main className='px-4 lg:p-8 -mt-4 mb-8 bg-dark-text text-gray-text lg:mx-6 lg:rounded-lg lg:-mt-12 border border-dark-light-text'>
      <SearchBy />

      <div className='lg:flex lg:flex-row lg:gap-12'>
        <div className='flex flex-col lg:w-1/4 lg:mt-10'>
          <SortBy />

          <SelectedButtons />

          <StatusCheckbox />
        </div>

        <CountryTable />
      </div>
    </main>
  );
}
