/**
 * Application configuration for SWF
 */
export const swrConfig = {
  // We know our errors are deterministic, no reason to retry
  errorRetryCount: 0,
  // I dislike this from a UX perspective
  revalidateOnFocus: false,
};
