import { useState } from "react";

/**
 * Convenience hook for setting up a list as react state.
 * Exposes an add and remove function instead of the traditional setState.
 * The add function will not add the same item twice.
 */
export const useUniqueContainer = <T>(initialState: T[] = []) => {
  const [list, setList] = useState<T[]>(initialState);
  const add = (item: T) => {
    if (!list.includes(item)) {
      setList([...list, item]);
    }
  };
  const remove = (item: T) => {
    const index = list.indexOf(item);
    if (index !== -1) {
      const changed = list.slice();
      changed.splice(index, 1);
      setList(changed);
    }
  };
  return [list, add, remove] as const;
};
