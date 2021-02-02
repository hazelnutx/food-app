/**
 * Emulates nominal typing.
 * https://basarat.gitbook.io/typescript/main-1/nominaltyping#using-literal-types
 */
type Nominal<T, K> = T & { __TYPE__: K };
