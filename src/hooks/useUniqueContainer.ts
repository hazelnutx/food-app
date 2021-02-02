import { useState } from "react";

/**
 * Convenience hook for setting up a list as react state.
 * Exposes add, remove and replace functions instead of the traditional setState.
 * The add function will not add the same item twice.
 */
export const useUniqueContainer = <T>(
  initialState: T[] = [],
  isEqual = (a: T, b: T) => a === b
) => {
  const [list, setList] = useState<T[]>(initialState);
  const add = (item: T) => {
    const index = list.findIndex((candidate) => isEqual(candidate, item));
    if (index === -1) {
      setList([...list, item]);
    }
  };
  const remove = (item: T, ...insert: T[]) => {
    const index = list.findIndex((candidate) => isEqual(candidate, item));
    if (index !== -1) {
      const changed = list.slice();
      changed.splice(index, 1, ...insert);
      setList(changed);
    }
  };
  const replace = (item: T, replacement: T) => remove(item, replacement);
  return [list, add, remove, replace] as const;
};
