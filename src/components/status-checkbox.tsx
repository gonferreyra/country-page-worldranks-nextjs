'use client';

import { useCountriesSortContext } from '@/lib/hooks';

export default function StatusCheckbox() {
  const { selectedCheckbox, handleCheckboxChange } = useCountriesSortContext();

  return (
    <>
      <label htmlFor='status' className='mt-8 text-xs'>
        Status
      </label>

      <div className='flex items-center gap-2 mt-2'>
        <input
          type='checkbox'
          value='member'
          id='member'
          className='w-6 h-6 bg-dark-text'
          checked={selectedCheckbox.includes('member')}
          onChange={() => handleCheckboxChange('member')}
        />
        <label htmlFor='member' className='text-white-text font-bold text-sm'>
          Member of the United Nations
        </label>
      </div>

      <div className='flex items-center gap-2 mt-2'>
        <input
          type='checkbox'
          value='independent'
          id='independent'
          className='w-6 h-6'
          checked={selectedCheckbox.includes('independent')}
          onChange={() => handleCheckboxChange('independent')}
        />
        <label htmlFor='member' className='text-white-text font-bold text-sm'>
          Independent
        </label>
      </div>
    </>
  );
}
