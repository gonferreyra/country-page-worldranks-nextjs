'use client';

import InputButton from './input-button';
import { buttons } from '@/lib/constants';
import { useCountriesSortContext } from '@/lib/hooks';

export default function SelectedButtons() {
  const { handleButtonSelection, selectedButtons } = useCountriesSortContext();

  return (
    <>
      <label htmlFor='region' className='mt-8 text-xs'>
        Region
      </label>
      <div className='flex items-center gap-2 mt-2 flex-wrap'>
        {buttons.map((button, index) => (
          <InputButton
            key={index}
            value={button.value}
            index={index}
            isSelected={selectedButtons?.includes(index)}
            onSelect={handleButtonSelection}
          />
        ))}
      </div>
    </>
  );
}
