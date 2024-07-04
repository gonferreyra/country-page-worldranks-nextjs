'use client';

import { useCountriesSortContext } from '@/lib/hooks';

export default function SortBy() {
  const { sortBy, handleChangeSortBy } = useCountriesSortContext();

  return (
    <>
      <label htmlFor='sort' className='text-xs font-bold'>
        Sort by
      </label>
      <select
        name='sort'
        id='sort'
        className='bg-inherit border border-dark-light-text px-4 py-2 rounded-xl mt-2'
        size={1}
        defaultValue={sortBy}
        onChange={(e) => handleChangeSortBy(e.target.value)}
      >
        <option value='population' className='text-sm bg-dark-text'>
          Population
        </option>
        <option value='area' className='text-sm bg-dark-text'>
          Area
        </option>
        <option value='name' className='text-sm bg-dark-text'>
          Name
        </option>
      </select>
    </>
  );
}
