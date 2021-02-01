import { useEffect, useMemo } from "react";

/**
 * Allows spying on mount state without storing it as component state (which would trigger re-renders)
 */
export const useMountState = () => {
  const state = useMemo(() => ({ isMounted: false }), []);

  useEffect(() => {
    state.isMounted = true;
    return () => {
      state.isMounted = false;
    };
  }, [state]);

  return state;
};
