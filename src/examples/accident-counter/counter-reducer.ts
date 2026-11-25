export const initialState = {
  count: 0,
};

type Action = {
  type: string;
  payload?: unknown;
};

interface IncrementAction extends Action {
  type: 'increment';
  payload?: never;
}

type DecrementAction = Action & {
  type: 'decrement';
  payload?: never;
};

interface SetCounterAction extends Action {
  type: 'set-counter';
  payload: number;
}

export type CounterAction = IncrementAction | DecrementAction | SetCounterAction;

// Improvement: Define a proper Action type instead of using 'any'.

export const counterReducer = (state = initialState, action: CounterAction) => {
  console.log({ action });
  const { count } = state;

  switch (action.type) {
    case 'increment':
      return { count: count + 1 };
    case 'decrement':
      return { count: count - 1 };
    case 'set-counter':
      return { count: action.payload };
  }
};
