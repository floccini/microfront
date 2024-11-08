import { Dispatch, SetStateAction, useState } from 'react';

interface InputProps {
  setItems: Dispatch<SetStateAction<string[]>>;
}

const Input = ({ setItems }: InputProps) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (value: string) => {
    if (!value) return null;

    setItems((prevItems) => [...prevItems, value]);

    setValue('');
  };

  return (
    <div style={{ display: 'flex', gap: '14px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit" onClick={() => handleSubmit(value)}>
        Add
      </button>
    </div>
  );
};

export default Input;
