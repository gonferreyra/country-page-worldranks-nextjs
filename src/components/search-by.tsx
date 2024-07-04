'use client';

import { useCountriesSortContext } from '@/lib/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SearchBy() {
  const { searchBy, handleSearchBy } = useCountriesSortContext();

  return (
    <div className='flex items-center justify-between py-4'>
      <p className='font-bold'>Found 234 countries</p>
      <form className='flex items-center bg-dark-light-text px-4 py-3 rounded-xl w-[340px]'>
        <Image src='/Search.svg' width={25} height={50} alt='seatch-icon' />
        <input
          type='text'
          placeholder='Search by Name, Region, Subregion'
          className='bg-transparent w-full outline-none pl-2 font-bold text-sm'
          value={searchBy}
          onChange={(e) => handleSearchBy(e.target.value)}
        />
      </form>
    </div>
  );
}
