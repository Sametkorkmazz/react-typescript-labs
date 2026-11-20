import { Card } from '$/common/components/card';
import { useState, type ChangeEventHandler, type Dispatch, type FormEventHandler } from 'react';
import { Button } from './button';

type CounterControlsProps = {
  setCount: Dispatch<React.SetStateAction<number>>;
};

const CounterControls = ({ setCount }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <button onClick={() => setCount((prev) => prev - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>➕ Increment</button>
    </div>
  );
};

type CounterFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
};

const CounterForm = ({ onSubmit, onChange, value }: CounterFormProps) => {
  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        onChange={onChange}
        value={value}
      />
      <Button>Update Counter</Button>
    </form>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setNumber(Number(e.target.value));

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setCount(number);
  };

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterControls setCount={setCount} />
      <CounterForm onSubmit={handleSubmit} onChange={handleChange} value={number} />
    </Card>
  );
};
