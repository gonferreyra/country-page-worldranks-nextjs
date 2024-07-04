'use client';

import { useCountriesSortContext } from '@/lib/hooks';
import Image from 'next/image';

export default function CountryTable() {
  const {
    countriesSearchBy,
  } = useCountriesSortContext();


  return (
    <div className='mt-8 lg:w-3/4'>
      <table className='table-auto w-full'>
        <thead className='border-b border-dark-light-text'>
          <tr className='text-xs text-justify'>
            <th className='py-4'>Flag</th>
            <th className='py-4'>Name</th>
            <th className='py-4'>Population</th>
            <th className='py-4'>Area(km2)</th>
          </tr>
        </thead>
        <tbody>
          {countriesSearchBy?.slice(0, 6).map((country) => (
            <tr key={country.cca2}>
              <td className='py-4 text-white-text'>
                <Image
                  src={country.flags.svg}
                  alt='flag'
                  width={50}
                  height={40}
                  className='rounded-[4px]'
                />
              </td>
              <td className='py-4 text-white-text font-bold'>
                {country.name.common}
              </td>
              <td className='py-4 text-white-text font-bold'>
                {country.population.toLocaleString()}
              </td>
              <td className='py-4 text-white-text font-bold'>
                {country.area.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
