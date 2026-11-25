import { Card } from '$/common/components/card';
import { useReducer, type ActionDispatch } from 'react';
import { Button } from './button';
import { counterReducer, initialState, type CounterAction } from './counter-reducer';

type CounterControlsProps = {
  dispatch: React.ActionDispatch<[action: CounterAction]>;
};

const CounterControls = ({ dispatch }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => dispatch({ type: 'decrement' })}>➖ Decrement</Button>
      <Button onClick={() => dispatch({ type: 'set-counter', payload: 0 })}>🔁 Reset</Button>
      <Button onClick={() => dispatch({ type: 'increment' })}>➕ Increment</Button>
    </div>
  );
};

const CounterForm = ({ dispatch }: { dispatch: ActionDispatch<[action: CounterAction]> }) => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        dispatch({ type: 'set-counter', payload: Number(formData.get('number')) });
      }}
    >
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="number"
        defaultValue={0}
      />
      <Button>Update Counter</Button>
    </form>
  );
};

export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  // dispatch({ type: 'decrement' });
  const { count } = state;

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterControls dispatch={dispatch} />
      <CounterForm dispatch={dispatch} />
    </Card>
  );
};
