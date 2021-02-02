/**
 * API convention (convenience method)
 */
export const apiCall = async <T>(
  operation: string,
  init: RequestInit = {}
): Promise<T> => {
  const response = await fetch(
    "https://trackapi.nutritionix.com/v2/" + operation,
    {
      headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env["REACT_APP_NUTRITIONIX_APP_ID"]!,
        "x-app-key": process.env["REACT_APP_NUTRITIONIX_APP_KEY"]!,
      },
      ...init,
    }
  );
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return await response.json();
};
