import { useState } from 'react';

/**
 * A CSS color string in `rgb(r, g, b)` form, enforced at the type level
 * with a template literal type.
 *
 * @example
 * const ok: RGBType = 'rgb(255, 0, 0)';
 * const bad: RGBType = '#ff0000'; // ❌ type error
 */
type RGBType = `rgb(${number}, ${number}, ${number})`;

/**
 * Custom hook that holds a single color value in state.
 *
 * Works like `useState`, but only accepts colors that match {@link RGBType},
 * so invalid strings such as `'red'` or `'#fff'` are rejected by TypeScript.
 *
 * @param defaultColor - Initial color. Defaults to `'rgb(255, 0, 0)'` (red).
 * @returns A `[color, setColor]` pair, mirroring the `useState` API.
 *
 * @example
 * const [color, setColor] = useColor('rgb(0, 128, 255)');
 * setColor('rgb(10, 20, 30)');
 */
const useColor = (defaultColor: RGBType = 'rgb(255, 0, 0)') => {
  const [color, setColor] = useState<RGBType>(defaultColor);

  return [color, setColor] as const;
};
