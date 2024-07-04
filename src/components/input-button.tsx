import clsx from 'clsx';

type InputButtonProps = {
  value: string;
  index: number;
  isSelected: boolean;
  onSelect: (index: number) => void;
};

export default function InputButton({
  value,
  index,
  isSelected,
  onSelect,
}: InputButtonProps) {
  const handleClick = () => {
    onSelect(index);
  };

  return (
    <input
      type='button'
      value={value}
      className={clsx('input-btn', {
        'bg-dark-light-text text-white': isSelected,
      })}
      onClick={handleClick}
    />
  );
}
