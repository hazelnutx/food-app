/**
 * Emulates nominal typing.
 * https://basarat.gitbook.io/typescript/main-1/nominaltyping#using-literal-types
 *
 * Useful for this app since there are a number of different string ids in the Nutritionix
 * response data with similar property names that could easily be mistaken for one another
 */
type Nominal<T, K> = T & { __TYPE__: K };
