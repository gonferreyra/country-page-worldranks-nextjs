'use client';

import { useCountriesSortContext } from '@/lib/hooks';
import Image from 'next/image';
import { useState } from 'react';

export default function CountryPage({
  params,
}: {
  params: { country: string };
}) {
  const { getCountryByName } = useCountriesSortContext();

  const country = getCountryByName(params.country);
  // console.log(country);

  return (
    <main className='px-4 lg:p-8 -mt-4 mb-8 bg-dark-text text-gray-text lg:rounded-lg lg:-mt-12 border border-dark-light-text max-w-screen-md mx-auto font-bold'>
      <Image src={country.flags.svg} alt='flag' width={50} height={100} />

      <h2 className='text-[32px]'>{country.name.common}</h2>
      <h3>{country.name.official}</h3>

      <div>
        <p className=''>Population</p>
        <p>{country.population}</p>
      </div>

      <div>
        <p>Area (km2)</p>
        <p>{country.area}</p>
      </div>
    </main>
  );
}
