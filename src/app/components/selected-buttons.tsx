'use client';

import { useState } from 'react';
import InputButton from './input-button';

const buttons = [
  { value: 'Americas' },
  { value: 'Antartic' },
  { value: 'Europe' },
  { value: 'Africa' },
  { value: 'Asia' },
  { value: 'Oceania' },
];

export default function SelectedButtons() {
  const [selectedButtons, setSelectedButtons] = useState<number[]>([]);

  // console.log(selectedButtons); Esta guardando el indice en selected

  const handleSelection = (index: number) => {
    setSelectedButtons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className='flex items-center gap-2 mt-2 lg:flex-wrap'>
      {buttons.map((button, index) => (
        <InputButton
          key={index}
          value={button.value}
          index={index}
          isSelected={selectedButtons.includes(index)}
          onSelect={handleSelection}
        />
      ))}
    </div>
  );
}
