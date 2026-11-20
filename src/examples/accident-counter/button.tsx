import type { ComponentPropsWithoutRef } from 'react';

export const Button = ({ children, ...rest }: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white"
      {...rest}
    >
      {children}
    </button>
  );
};
